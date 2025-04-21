import OpenAI from 'openai';

export default async function GetRecipe(ingredientList) {

    const endpoint = import.meta.env.VITE_APP_AZURE_OPEN_API_URL;
    const apiKey = import.meta.env.VITE_APP_AZURE_OPEN_AI_API_KEY;
    const apiVersion = "2025-01-01-preview";
    const deployment = "ChefAI";

    const openai = new OpenAI({
        apiKey: apiKey,
        baseURL: endpoint,
        defaultQuery: { 'api-version': apiVersion },
        defaultHeaders: { 'api-key': apiKey },
        dangerouslyAllowBrowser:true
    });    

    const systemPrompt = "You are Chef AI Assistant who is provided with a list of ingredients by the user and is asked for a recipe that can be made using those ingredients. Provide a step by step instruction for making that recipe. The recipe can include some additional ingredients that's not passed and may not include some of ingredients that are passed depending upon the suggestion. Format the response as a markdown to make it easier to render to a web page."

    const userMessage = `Suggest me a recipe based on the ingredients - ${ingredientList}.`

    try {
        const completion = await openai.chat.completions.create({
            model: deployment,
            messages: [
                { role: "system", content: systemPrompt },
                { role: "user", content: userMessage }
            ],            
            temperature: 0.7
        });

        if (completion.choices && completion.choices.length > 0) {
            console.log("Chef AI Response:");
            console.log(completion.choices[0].message.content);
            return completion.choices[0].message.content;
        } else {
            console.log("No response received from Chef AI.");
            return "No response received from Chef AI."
        }
    }
    catch (error) {
        console.error("Error calling Chef AI:", error);
    }
}