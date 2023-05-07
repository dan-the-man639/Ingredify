import {writeMongo, fetchDuplicate, updateMongo} from "./mongo-database.js";
import {cohereClassifyPurpose, cohereGenerateDescription, cohereSummarize} from "./cohere-analysis.js";

export async function checkCondition(condition, ingredientsArray, conditionDatabase = "conditions") {
    let conditionArray = await fetchDuplicate("condition", condition, conditionDatabase);
    console.log(conditionArray.documents[0].permitted);
    console.log(conditionArray.documents[0].unpermitted);
    for (let i in ingredientsArray) {
        if (exists(conditionArray.documents[0].permitted, ingredientsArray[i]) || exists(conditionArray.documents[0].unpermitted, ingredientsArray[i])) {
            console.log(ingredientsArray[i] + " is in known condition ingredients list");
            if (exists(conditionArray.documents[0].unpermitted, ingredientsArray[i])) {
                console.log(false);
                return false;
            }
        }
        else {
            let duplicateIngredient = await fetchDuplicate("ingredient", ingredientsArray[i].toLowerCase().trim(), "ingredients");
            console.log(ingredientsArray[i] + " | " + duplicateIngredient.documents.length);
            if (duplicateIngredient.documents.length === 0) {
                console.log("New ingredient");
                console.log(ingredientsArray[i]);
                await newIngredient(ingredientsArray[i].toLowerCase().trim());
            }
            else {
                console.log("Already exists");
                console.log(ingredientsArray[i]);
            }
        }
    }
    console.log(true);
    return true;
}

async function newIngredient(ingredient) {
    let ingredientDescription = await cohereGenerateDescription(ingredient);
    console.log(ingredient);
    let healthClassification = await cohereClassifyPurpose("health", ingredientDescription);
    console.log(healthClassification.prediction);
    console.log(healthClassification.confidence);
    if (healthClassification.prediction.includes("un")) {
        healthClassification = false;
    }
    else {
        healthClassification = true;
    }
    let fillerClassification = await cohereClassifyPurpose("filler", ingredientDescription);
    console.log(fillerClassification.prediction);
    console.log(fillerClassification.confidence);
    if (fillerClassification.prediction.includes("un")) {
        fillerClassification = false;
    }
    else {
        fillerClassification = true;
    }
    let tasteClassification = await cohereClassifyPurpose("taste", ingredientDescription);
    console.log(tasteClassification.prediction);
    console.log(tasteClassification.confidence);
    if (tasteClassification.prediction.includes("un")) {
        tasteClassification = false;
    }
    else {
        tasteClassification = true;
    }
    let message = "The ingredient " + ingredient + " in food is used for " + ingredientDescription;
    let summary = await cohereSummarize(message);
    console.log(summary);
    await writeMongo(undefined, undefined, undefined, "ingredients", ingredient, healthClassification, fillerClassification, tasteClassification, undefined, [message]);
    // return [ingredient, healthClassification, fillerClassification, tasteClassification, summary];
    let data = {
        "ingredient": ingredient,
        "health": healthClassification,
        "filler": fillerClassification,
        "taste": tasteClassification,
        "summary": summary
    };
    return data
}

function exists(arr, search) {
    return arr.some(row => row.includes(search));
}

export async function queryIngredients(ingredientsArray) {
    let response = [];
    for (let i in ingredientsArray) {
        let duplicateIngredient = await fetchDuplicate("ingredient", ingredientsArray[i].toLowerCase().trim(), "ingredients");
        console.log(duplicateIngredient.documents.length);
        if (duplicateIngredient.documents.length === 0) {
            console.log("New ingredient");
            console.log(ingredientsArray[i]);
            response[i] = await newIngredient(ingredientsArray[i].toLowerCase().trim());
            console.log("foobar1" + response[i]);
        }
        else {
            console.log("Already exists");
            console.log(ingredientsArray[i]);
            let descriptions = duplicateIngredient.documents[0].description;
            let ingredientDescription = "The ingredient " + ingredientsArray[i] + " in food is used for ";
            ingredientDescription += await cohereGenerateDescription(ingredientsArray[i]);
            // console.log(descriptions);
            let summaryInput = "";
            for (var j in descriptions) {
                summaryInput += descriptions[j];
            }
            // console.log(summaryInput);
            let summary = await cohereSummarize(summaryInput);
            console.log(summary);
            descriptions.push(ingredientDescription);
            await updateMongo("ingredient", ingredientsArray[i], "description", descriptions, "ingredients")
            // response[i] = [ingredientsArray[i], duplicateIngredient.documents[0].health, duplicateIngredient.documents[0].filler, duplicateIngredient.documents[0].taste, summary];
            let data = {
                "ingredient": ingredientsArray[i],
                "health": duplicateIngredient.documents[0].health,
                "filler": duplicateIngredient.documents[0].filler,
                "taste": duplicateIngredient.documents[0].taste,
                "summary": summary
            };
            response[i] = data;
            console.log("foobar2" + response[i]);
        }
    }
    return response;
}

export async function userProfile(username, conditionArray, consumed) {
    let duplicateUser = await fetchDuplicate("username", username.toLowerCase().trim(), "users");
    console.log(duplicateUser.documents.length);
    if (duplicateUser.documents.length === 0) {
        console.log("New user");
        await writeMongo(undefined, undefined, undefined, "users", undefined, undefined, undefined, undefined, undefined, undefined, username, conditionArray, consumed);
    }
    else {
        console.log("Existing user");
        await updateMongo("username", username, "username", username, "users", "conditionArray", conditionArray, "consumed", consumed);
    }
    let data = {
        "username": username,
        "conditionArray": conditionArray,
        "consumed": consumed
    };
    return data;
}
