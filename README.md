# Analytica

This repository contains a project designed to analyze social media performance metrics and provide actionable insights. The project leverages a powerful combination of tools and technologies, including Langflow for workflow orchestration, DataStax Astra DB for data storage and querying, and GROQ's Llama 3.1 LLM for analytics. A frontend built with Next.js and TypeScript provides an intuitive user interface, allowing users to interact with the system seamlessly through APIs.

---

## **Project Architecture**

### 1. **Frontend**
The frontend is built using **Next.js** with **TypeScript**, providing a modern and responsive interface. Users can submit queries and view insights in real time. Key features include:
- Input forms to query specific social media metrics (e.g., engagement rates, post performance).
- Visual representation of insights, such as engagement trends and high-performing posts.
- API integration to interact with the backend.

### 2. **Langflow Workflow**
Langflow is used to orchestrate the backend workflow. The flow is composed of the following nodes:

#### **Nodes and Their Roles**
- **Chat Input Node**:
  Captures user queries, such as "What is the average engagement rate?"

- **Astra DB Node**:
  - Connects to DataStax Astra DB to retrieve data.
  - Handles queries for metrics like `likes`, `shares`, `comments`, `views`, and `engagement_rate`.

- **Analytics Agent Node**:
  - Utilizes GROQ’s Llama 3.1 LLM to analyze the data.
  - Generates detailed insights based on user queries.

- **Chat Output Node**:
  Displays the final insights and reports generated by the LLM back to the frontend.

### 3. **Data Storage with Astra DB**
- **Database**: Hosted on DataStax Astra DB, this NoSQL database contains the social media dataset.
- **Schema**: The data includes the following columns:
  ```
  post_id | post_type | likes | shares | comments | views | saves | total_engagement | engagement_rate | post_date
  ```
- **Integration**: Astra DB ensures fast and efficient querying of large datasets, which is crucial for real-time analysis.

### 4. **Analytics with GROQ LLM**
- **Model Provider**: GROQ
- **Model**: Llama 3.1 (11B parameters)
- **Functionality**:
  - Processes data retrieved from Astra DB.
  - Generates summaries, trends, and comparisons for social media performance metrics.
  - Tailored agent instructions ensure insights are aligned with social media analysis.

---

## **Frontend-Backend Interaction**
The frontend communicates with the Langflow workflow through REST APIs. Here’s how the interaction is structured:

### **Frontend**
- **Query Submission**: Users input queries like "What are the top 3 performing posts?"
- **API Calls**: The frontend sends these queries to the backend API endpoint exposed by Langflow.

### **Backend**
- **Workflow Execution**:
  - The Langflow workflow processes the query.
  - Astra DB retrieves the necessary data.
  - GROQ’s LLM analyzes the data and generates a response.
- **Response Handling**: The processed insights are sent back to the frontend.

---

## **Setup Instructions**

### **1. Prerequisites**
- Node.js (>= 16.x)
- DataStax Astra DB account and access credentials
- Langflow installed locally or hosted
- GROQ LLM API key

### **2. Frontend Setup**
1. Clone the repository.
2. Navigate to the `frontend` directory.
3. Install dependencies:
   ```bash
   npm install
   ```
4. Create an `.env.local` file and configure the backend API endpoint:
   ```env
   NEXT_PUBLIC_API_URL=https://your-langflow-backend-endpoint
   ```
5. Run the development server:
   ```bash
   npm run dev
   ```

### **3. Backend Workflow**
1. Set up the Langflow workflow as follows:
   - Configure the **Chat Input Node** for query capture.
   - Connect the **Astra DB Node** with your database credentials.
   - Configure the **Analytics Agent Node** with GROQ’s API key and Llama 3.1 model.
   - Add a **Chat Output Node** to display insights.
2. Save and deploy the workflow.

### **4. Astra DB Configuration**
1. Create a database in DataStax Astra DB.
2. Import the social media dataset with the specified schema.
3. Generate an Application Token and use it in the Langflow Astra DB node.

---

## **Usage**
1. Launch the frontend application.
2. Enter a query, such as "Show me the engagement rate for video posts."
3. The query is sent to the backend workflow via API.
4. Insights are fetched, analyzed, and displayed on the frontend.

---

## **Technologies Used**
- **Frontend**: Next.js, TypeScript
- **Backend**: Langflow
- **Database**: DataStax Astra DB
- **LLM**: GROQ Llama 3.1

---

## **Future Enhancements**
- Add visualization libraries (e.g., Chart.js or D3.js) for graphical insights.
- Expand the dataset to include hashtags, geotags, and more.
- Implement advanced querying features for customized reporting.

---

## **Contributors**
Prathamesh Bhaskar, Sarthak Gaikwad, Atharva Divekar
---

## **License**
This project is licensed under the MIT License. See the LICENSE file for more details.

---

