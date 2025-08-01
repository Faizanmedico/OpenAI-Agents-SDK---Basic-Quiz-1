// Questions array
const questions = [


    {
        "id": 1,
        "question": "What is the OpenAI Agents SDK used for?",
        "options": ["Image generation", "Building AI agents that can use tools and perform actions", "Game development", "Speech synthesis"],
        "answer": "Building AI agents that can use tools and perform actions",
        "explanation": "The OpenAI Agents SDK enables you to build AI agents that can use tools and take action based on user prompts."
    },
    {
        "id": 2,
        "question": "Which decorator is used to turn a Python function into a usable tool for an agent?",
        "options": ["@agent", "@tool", "@function", "@action"],
        "answer": "@tool",
        "explanation": "The `@tool` decorator registers a Python function so the agent can call it as a tool."
    },
    {
        "id": 3,
        "question": "What does the `Agent` class represent in the SDK?",
        "options": ["A chatbot UI", "An OpenAI model", "A tool configuration manager", "An autonomous AI capable of using tools"],
        "answer": "An autonomous AI capable of using tools",
        "explanation": "The `Agent` class defines an AI agent that can think, plan, and use tools to respond to tasks."
    },
    {
        "id": 4,
        "question": "Which module executes the agent loop and handles tool calling?",
        "options": ["Worker", "Executor", "Runner", "Tasker"],
        "answer": "Runner",
        "explanation": "The `Runner` is responsible for executing the agent logic and managing its interaction with tools."
    },
    {
        "id": 5,
        "question": "What is required for an agent to access tools?",
        "options": ["A GPU", "A Docker container", "A list of registered tools", "Python 2.7 compatibility"],
        "answer": "A list of registered tools",
        "explanation": "Tools must be registered and passed to the agent for it to use them."
    },
    {
        "id": 6,
        "question": "How does the agent decide which tool to use?",
        "options": ["Hardcoded logic", "Random selection", "LLM reasoning", "Predefined order"],
        "answer": "LLM reasoning",
        "explanation": "The agent uses a language model (LLM) to reason about which tool is appropriate for a given task."
    },
    {
        "id": 7,
        "question": "What file format can be used to load tools dynamically?",
        "options": [".txt", ".py", ".json", ".exe"],
        "answer": ".py",
        "explanation": "Python scripts (`.py`) can define tools which are dynamically imported and registered."
    },
    {
        "id": 8,
        "question": "What is the purpose of the `input_schema` in a tool?",
        "options": ["Define model architecture", "Describe environment variables", "Validate and parse input", "Handle file uploads"],
        "answer": "Validate and parse input",
        "explanation": "The `input_schema` helps validate and parse structured input data for tool functions."
    },
    {
        "id": 9,
        "question": "What kind of function can be registered as a tool?",
        "options": ["Only async functions", "Any Python function", "Only functions returning JSON", "Only built-in functions"],
        "answer": "Any Python function",
        "explanation": "Any standard Python function can be used as a tool, with optional input/output schemas."
    },
    {
        "id": 10,
        "question": "What is the role of `tool_call_limit` in an agent?",
        "options": ["Limits API key usage", "Sets the maximum number of tool invocations", "Restricts file size", "Slows agent response"],
        "answer": "Sets the maximum number of tool invocations",
        "explanation": "`tool_call_limit` defines how many times the agent is allowed to call tools during one run."
    },

    {
        "id": 11,
        "question": "What is the purpose of the `description` field in a tool decorator?",
        "options": ["Adds GPU support", "Describes the function’s logic in comments", "Helps the agent understand when to call the tool", "Logs the tool's runtime"],
        "answer": "Helps the agent understand when to call the tool",
        "explanation": "The `description` is used by the language model to understand when and why to call a specific tool."
    },
    {
        "id": 12,
        "question": "In the SDK, what format does the agent use internally to plan tool usage?",
        "options": ["Natural language", "JSON actions", "YAML configuration", "CSV metadata"],
        "answer": "JSON actions",
        "explanation": "The agent internally structures actions in JSON-like plans to invoke tools with the correct inputs."
    },
    {
        "id": 13,
        "question": "What does the `name` argument in the `@tool` decorator affect?",
        "options": ["API route name", "Model's attention mechanism", "The name the agent uses to call the tool", "The UI element label"],
        "answer": "The name the agent uses to call the tool",
        "explanation": "`name=\"tool_name\"` defines how the tool will be referenced in the agent’s reasoning and execution steps."
    },
    {
        "id": 14,
        "question": "Which component allows persistent memory across agent runs?",
        "options": ["openai.SessionMemory", "openai.Memory", "openai.Runner.Memory", "No memory persistence supported"],
        "answer": "openai.SessionMemory",
        "explanation": "`SessionMemory` stores interactions across multiple inputs, allowing the agent to remember past conversations."
    },
    {
        "id": 15,
        "question": "What does the agent use to decide whether to use a tool or not?",
        "options": ["Random choice", "Tool metadata", "Language model reasoning", "Python conditionals"],
        "answer": "Language model reasoning",
        "explanation": "The LLM uses its own reasoning chain to decide if a tool is required for the current prompt or not."
    },
    {
        "id": 16,
        "question": "How can you simulate tool use without calling external APIs?",
        "options": ["Use @mocktool decorator", "Define the tool but never call it", "Stub the tool with print statements", "Use local tools with test inputs"],
        "answer": "Use local tools with test inputs",
        "explanation": "Local, fake, or test tools (like ones that return static or dummy data) are a common way to simulate tool usage."
    },
    {
        "id": 17,
        "question": "What happens if the input schema of a tool is incorrect?",
        "options": ["The tool runs anyway", "The agent retries with a different format", "It raises a validation error", "The schema is auto-corrected"],
        "answer": "It raises a validation error",
        "explanation": "If the tool’s input schema doesn’t match, `pydantic` raises a validation error and the agent can’t proceed."
    },
    {
        "id": 18,
        "question": "How do you handle multiple tools in the SDK?",
        "options": ["Combine all logic into one function", "Register each with @tool and pass them into the agent", "Only one tool is allowed per agent", "Use YAML to declare them"],
        "answer": "Register each with @tool and pass them into the agent",
        "explanation": "You can define multiple `@tool` functions and pass them as a list to the `Agent(tools=[...])`."
    },
    {
        "id": 19,
        "question": "What is one advantage of structured tool usage in agents?",
        "options": ["Reduces power usage", "Enforces strong typing and validation", "Avoids all errors", "Removes the need for prompts"],
        "answer": "Enforces strong typing and validation",
        "explanation": "Structured tools ensure correct inputs/outputs with validation, reducing logic errors in agent behavior."
    },
    {
        "id": 20,
        "question": "How do you define a tool that takes multiple input parameters?",
        "options": ["Pass a list", "**kwargs", "Create a pydantic.BaseModel input class", "Use eval() on strings"],
        "answer": "Create a pydantic.BaseModel input class",
        "explanation": "To define multiple structured inputs, you create a `pydantic` model and use it as the input type for the tool."
    },






  {
    id: 1,
    question: "What is the OpenAI Agents SDK used for?",
    options: [
      "Image generation",
      "Building AI agents that can use tools and perform actions",
      "Game development",
      "Speech synthesis"
    ],
    answer: "Building AI agents that can use tools and perform actions",
    explanation: "The SDK is designed for tool-using AI agents, not image or speech tasks."
  },
  {
    id: 2,
    question: "Which method runs the agent in a loop until the task is done?",
    options: ["agent.run_forever()", "agent.invoke()", "runner.run()", "agent.execute()"],
    answer: "runner.run()",
    explanation: "`runner.run()` executes the goal-to-tools loop."
  },
  {
    id: 3,
    question: "What does the `Agent` class define in the Agents SDK?",
    options: [
      "UI components",
      "LLM model settings",
      "Agent behavior and tool usage logic",
      "API routes"
    ],
    answer: "Agent behavior and tool usage logic",
    explanation: "The `Agent` class encapsulates logic for how the AI uses tools and interacts."
  },
  {
    id: 4,
    question: "Which function is used to start an agent run with a user goal?",
    options: ["agent.execute()", "agent.start(goal)", "runner.run()", "agent.invoke(goal)"],
    answer: "agent.invoke(goal)",
    explanation: "`agent.invoke(goal)` starts the interaction with the agent based on the user’s goal."
  },
  {
    id: 5,
    question: "What is a 'tool' in the OpenAI Agents SDK?",
    options: [
      "A hardware device",
      "An API or function the agent can call",
      "A debugger",
      "A Next.js route"
    ],
    answer: "An API or function the agent can call",
    explanation: "Tools are functions/APIs exposed to the agent for problem-solving."
  },
  {
    id: 6,
    question: "Which SDK class is responsible for the LLM completion layer?",
    options: ["Agent", "Tool", "AsyncOpenAI", "RunConfig"],
    answer: "AsyncOpenAI",
    explanation: "`AsyncOpenAI` handles async communication with the OpenAI API in Agents SDK."
  },
  {
    id: 7,
    question: "How do you register tools for your agent?",
    options: [
      "Via useEffect()",
      "Pass them to the agent constructor",
      "Calling agent.use(tool)",
      "Importing in page.tsx"
    ],
    answer: "Pass them to the agent constructor",
    explanation: "You define tools in the `Agent` constructor as a list."
  },
  {
    id: 8,
    question: "Which method sends prompts to OpenAI using the SDK?",
    options: ["client.send()", "client.ask()", "client.complete()", "client.chat.completions.create()"],
    answer: "client.chat.completions.create()",
    explanation: "This is the SDK method for sending a chat completion prompt."
  },
  {
    id: 9,
    question: "Where do you typically set the OpenAI API key?",
    options: [".env", "config.json", "settings.yaml", "global.js"],
    answer: ".env",
    explanation: "Environment variables are used to store sensitive API keys like OpenAI keys."
  },
  {
    id: 10,
    question: "Which file typically defines your agent logic?",
    options: ["agent.ts", "quiz.ts", "prompt.json", "main.py"],
    answer: "agent.ts",
    explanation: "Most projects define agent logic in a dedicated `agent.ts` or `agent.js` file."
  },
  {
    id: 11,
    question: "What does `set_tracing_disabled(True)` do?",
    options: [
      "Disables LLM output",
      "Turns off tool invocation",
      "Stops debug tracing of the agent run",
      "Removes chat history"
    ],
    answer: "Stops debug tracing of the agent run",
    explanation: "This disables tracing logs used for debugging agent runs."
  },
  {
    id: 12,
    question: "What format is tool metadata provided in?",
    options: ["CSV", "YAML", "JSON schema", "Markdown"],
    answer: "JSON schema",
    explanation: "Tool input/output formats follow JSON schema for validation."
  },
  {
    id: 13,
    question: "Which method is used to define the agent's core logic?",
    options: ["run()", "handle()", "chat()", "invoke()"],
    answer: "handle()",
    explanation: "`handle()` defines how the agent processes input and decides on tool usage."
  },
  {
    id: 14,
    question: "What type of function is typically used as a tool?",
    options: ["React component", "Express middleware", "Async function", "Shell command"],
    answer: "Async function",
    explanation: "Tools are often defined as async functions to support API calls or IO."
  },
  {
    id: 15,
    question: "Where is `RunConfig` used?",
    options: ["To configure tool behavior", "To define quiz UI", "To manage runtime agent settings", "To style buttons"],
    answer: "To manage runtime agent settings",
    explanation: "`RunConfig` allows setting LLM, tracing, tool limits, etc."
  },
  {
    id: 16,
    question: "How do you test tool calling works?",
    options: ["Write unit tests", "Run agent and inspect traces", "Use console.log", "Only in production"],
    answer: "Run agent and inspect traces",
    explanation: "Traces show how agents select and call tools."
  },
  {
    id: 17,
    question: "What is the default OpenAI model in SDK?",
    options: ["gpt-3.5", "gpt-4", "gpt-4o", "No default"],
    answer: "gpt-4o",
    explanation: "The SDK uses `gpt-4o` (multi-modal) as default when supported."
  },
  {
    id: 18,
    question: "Which OpenAI feature enables tool calling?",
    options: ["Functions", "Embeddings", "Image models", "Speech APIs"],
    answer: "Functions",
    explanation: "Tool calling is implemented using OpenAI's function calling feature."
  },
  {
    id: 19,
    question: "What is the first step to define a tool?",
    options: ["Export it", "Create a JSON file", "Define a function and add a schema", "Call agent.register()"],
    answer: "Define a function and add a schema",
    explanation: "Tools start as functions with a defined input/output schema."
  },
  {
    id: 20,
    question: "What happens if an agent can’t decide on a tool?",
    options: ["It crashes", "It uses fallback tool", "It asks the user", "It sends an LLM-only reply"],
    answer: "It sends an LLM-only reply",
    explanation: "When tools aren't used, the LLM responds directly instead."
  },
  {
    id: 21,
    question: "Which SDK version supports `oai.tool()`?",
    options: ["v0.0.1", "v1.0.0+", "v2.0.0", "v0.9.9"],
    answer: "v1.0.0+",
    explanation: "The new `@oai/agents` tools are supported in v1.0+."
  },
  {
    id: 22,
    question: "How do you switch models in the SDK?",
    options: ["Modify agent.ts", "Update .env", "Set model in RunConfig", "You can't"],
    answer: "Set model in RunConfig",
    explanation: "`RunConfig` lets you customize the model name."
  },
  {
    id: 23,
    question: "What does `.invoke()` return?",
    options: ["JSX output", "HTML page", "LLM response or tool result", "Boolean"],
    answer: "LLM response or tool result",
    explanation: "This is how `.invoke()` passes back the answer to the user."
  },
  {
    id: 24,
    question: "How do you view step-by-step tool calls?",
    options: ["Check devtools", "Use agent.inspect()", "Enable tracing", "Enable logs"],
    answer: "Enable tracing",
    explanation: "Enable tracing to debug each decision the agent makes."
  },
  {
    id: 25,
    question: "Can the SDK support streaming?",
    options: ["No", "Yes with SSE/WebSocket", "Only in API mode", "Only in tools"],
    answer: "Yes with SSE/WebSocket",
    explanation: "Streaming works with proper setup (e.g., React server components or API)."
  },
  {
    id: 26,
    question: "Which function disables logs/tracing?",
    options: ["set_logs_disabled()", "disableLogs()", "set_tracing_disabled()", "tracing.off()"],
    answer: "set_tracing_disabled()",
    explanation: "`set_tracing_disabled()` disables trace output."
  },
  {
    id: 27,
    question: "How are user goals defined?",
    options: ["As intents", "As function parameters", "As strings", "As models"],
    answer: "As strings",
    explanation: "Goals are passed to the agent as strings."
  },
  {
    id: 28,
    question: "What happens if a tool throws an error?",
    options: ["Agent crashes", "LLM retries", "Error is logged and agent continues", "Nothing"],
    answer: "Error is logged and agent continues",
    explanation: "The agent logs the error and continues execution."
  },
  {
    id: 29,
    question: "Is the SDK available in Python?",
    options: ["Yes", "No", "Only for LLMs", "Only for LangChain"],
    answer: "No",
    explanation: "As of now, OpenAI’s Agents SDK is Node.js (JavaScript/TypeScript) only."
  },
  {
    id: 30,
    question: "What library is used to define tools with decorators?",
    options: ["FastAPI", "LangGraph", "oai.tools", "Next.js"],
    answer: "oai.tools",
    explanation: "`oai.tools` provides decorators to define tools cleanly with schema."
  }








];