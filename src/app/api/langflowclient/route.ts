import { LangflowClient } from "../../utils/langflowclient";
import { NextRequest, NextResponse } from "next/server";


export async function POST(req: NextRequest) {
    const body = await req.json();
    const {inputValue} = body;

    // const inputValue = "Reel"
    
    const flowIdOrName = process.env.NEXT_PUBLIC_FLOW_ID_OR_NAME!;
    const langflowId = process.env.NEXT_PUBLIC_LANG_FLOW_ID!;
    const applicationToken = process.env.NEXT_PUBLIC_APPLICATION_TOKEN!;

    if (!flowIdOrName || !langflowId || !applicationToken) {
      return NextResponse.json({ error: "Missing environment variables" }, { status: 500 });
    }

    const langflowClient = new LangflowClient(
      "https://api.langflow.astra.datastax.com",
      applicationToken
    );

    try {
      const tweaks = {
        "Agent-vOMAL": {},
        "AstraDBToolComponent-9dkr2": {},
        "ChatOutput-b1urs": {},
        "ChatInput-RjrKR": {},
        "PythonREPLTool-BcQBJ": {},
      };

      const inputType = 'chat';
      const outputType = 'chat';
      const stream = false;
      
    //   console.log(inputValue);
      
      const response = await langflowClient.runFlow(
        flowIdOrName,
        langflowId,
        inputValue,
        inputType,
        outputType,
        tweaks,
        stream,
        (data: unknown ) => console.log("Received:", data), // onUpdate
        (message: string) => console.log("Stream Closed:", message), // onClose
        (error : unknown) => console.log("Stream Error:", error) // onError
      );
      if (!stream && response && response.outputs) {
        const flowOutputs = response.outputs[0];
        const firstComponentOutputs = flowOutputs.outputs[0];
        const output = firstComponentOutputs.outputs.message;
        const textMessage = output.message.text;
        console.log("Final Output:", output.message.text);

        return NextResponse.json(textMessage);
      }
    } catch (error : unknown) {
      console.error("Main Error", error);
      return NextResponse.json(error)
    }

}