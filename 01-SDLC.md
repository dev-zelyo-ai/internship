# SDLC (Software Development Life Cycle)

---

## Section 1

### 🔹 Software Engineer

- A **software engineer** is responsible for designing, creating, testing, and maintaining software.
- The role involves a **systematic approach** that includes development, operations, and continuous maintenance.
- Key methodologies and practices such as **Agile, Waterfall, DevOps, Scrum, Software Design, Programming, Testing, Product Management, and Version Control** are all interconnected to make the software development process effective.

![Screenshot](image3/Screenshot_from_2025-08-20_12-12-49.png)

---

### 🔹 Software Development

- Software development is more than just **writing code**; it is essentially about **problem-solving and automating tasks**.
- The process typically consists of:
    - Requirement gathering
    - Finding solutions
    - Implementing the solution
    - Testing the software
    - Deploying it for users
    - Maintaining and upgrading the system

![Screenshot](image3/Screenshot_from_2025-08-20_13-24-26.png)

---

### 🔹 Product Management

- **Product management** refers to planning, coordinating, and overseeing the development of a software product.
- It involves checking the **scope, schedule, and budget** to ensure successful delivery.
- Strong communication, leadership, and problem-solving skills are essential for a product manager.

**How project ideas emerge:**

- Need within an organization
- Gap in the market
- Personal requirements
- Ultimately, the goal is to **automate tasks or solve a specific problem**.

**After finalizing the idea:**

- The first step is to check for **resources and feasibility**.
- Example: If a company like *Yummy Food* wants to go online, they may collaborate with an IT service company.
- Before collaboration, certifications like **ISO, ISO/IEC, SOC 2** are checked along with company expertise, technology availability, and relevant experience.

---

## Section 2

### 🔹 Types of Software Development

![Screenshot](image3/Screenshot_from_2025-08-20_12-30-26.png)

1. **Front-End Development**
    - Focuses on the **user interface and experience** (client-side).
    - Should be **accessible, interactive, and efficient**, ensuring tasks can be completed quickly with minimal clicks.
    - Uses technologies like **HTML, CSS, JavaScript**.
2. **Back-End Development**
    - Manages **server-side logic, APIs, and databases**.
    - Ensures scalability, efficiency, and security.
    - Acts as the “engine” that powers the front-end.
3. **API Development**
    - APIs act as **digital glue** that connects different software systems.
    - Two ways of use: **Architectural APIs** (REST, SOAP, GraphQL, gRPC, WebSockets) and **Programmatic APIs** (built using different programming languages).

    ![Screenshot](image3/Screenshot_from_2025-08-20_12-41-53.png)


4. **Data Science Development**
    - Uses data to derive insights, predict outcomes, and make decisions.
    - Involves **statistical analysis, programming, data visualization, machine learning, and storytelling**.
5. **Mobile App Development**
    - Builds applications for iOS and Android.
    - Two types: **Native apps** (separate codebases for iOS & Android) and **Hybrid apps** (single codebase but reduced performance).
6. **Desktop Development**
    - Applications installed directly on desktops.
    - Many such functions are now accessible via web browsers.
7. **Cloud Computing Development**
    - Stores data securely on the **cloud instead of local devices**.
    - Uses technologies like **AWS, Docker, Kubernetes**, ensuring scalability and security.
8. **Full-Stack Development**
    - A full-stack developer has knowledge of both **front-end and back-end development**, along with APIs, databases, and mobile technologies.
9. **Game Development**
    - Involves **graphics design, programming, and production**.
    - Technologies used: **C++, Unity, Unreal Engine**.
10. **Embedded Systems Development**
    - Development of software for **microprocessors and microcontrollers** embedded in devices.
    - Languages commonly used: **C and Assembly**.
11. **Progressive Web App (PWA) Development**
    - PWAs combine the best of web and native apps.
    - They work offline, load faster, and are accessible across devices.
    - Use **service workers, web APIs, and web app manifests**.
12. **Open Source Development**
    - Involves building software that is **openly shared, modifiable, and collaborative**.
    - Encourages community contributions.
13. **Enterprise App Development**
    - Focuses on creating custom apps for businesses, such as **HR tools or project management apps**.
14. **E-commerce App Development**
    - Specialized apps for **online shopping, order tracking, and payments**.
    - Requires expertise in mobile, front-end, back-end, database, and testing.
15. **Database Development**
    - Organizes and manages data efficiently.
    - Types:
        - Relational (tabular format)
        - Non-relational (unstructured, internet-scale)
        - Object-oriented (uses OOP principles)
        - Document databases (for unstructured data)
16. **AI/ML Development**
    - Involves building models that can **mimic human intelligence**.
    - Uses algorithms and training data to perform automated tasks and predictions.

---

## Section 3

### 🔹 Analysis and Planning Phase of SDLC

- This phase identifies the **problem** the software will solve and defines **requirements and specifications**.
- It involves:
    - **High-level requirement gathering** to define features.
    - **Feasibility analysis** to check if the project is realistic.
    - **Project scope** to define inclusions and exclusions.
    - **Project plan** with timelines and resource allocation.
    - **Risk assessment** to identify possible hurdles.
    - **Cost considerations** for efficiency.
- Tools such as **use case diagrams and flowcharts** help in understanding workflow.
- A **Statement of Work (SOW)** documents the project plan, schedule, and scope.

**Challenges:**

1. Gathering complete and accurate information
2. Changes in requirements
3. Estimating time for complex projects

---

### Real-Life Example: Food Delivery App

- **Requirements:** Restaurant listings, food ordering, payments, tracking.
- **Feasibility:** Check GPS integration, budget, delivery partner availability.
- **Scope:** In – user app, restaurant dashboard, delivery app, admin panel. Out – drone delivery.
- **Plan:** 6 months for MVP, small dev team with testers & PM.
- **Risks:** Partner delays, peak traffic issues, payment downtime.
- **Cost:** Dev ₹20L, infra ₹5L/year, marketing ₹10L.

---

## Section 4

### 🔹 Cost Estimation Methods

1. **Bottom-up Estimation**
    - Breaks down costs into smaller components and combines them.
    - Accurate but time-consuming and resource-intensive.

    ![image](image3/image.png)
    
2. **Top-down Estimation**
    - Estimates overall project cost at a high level and then divides into components.
    - Faster but less detailed.
3. **Three-point Estimation (PERT Method)**
    - Considers **best-case, most likely, and worst-case** scenarios.
    - Uses averaging to identify realistic expectations.

    ![image](image3/image_1.png)

4. **Analogous Estimation**
    - Uses **historical data** from similar projects for cost prediction.
    - Example: Using past e-commerce app budgets to estimate a new one.
5. **Parametric Estimation**
    - Based on **historical data and statistical models**.
    - Relates cost with project parameters using mathematical models.

---

## Section 5

### 🔹 Requirement Gathering Phase

- **Requirements** → What the customer *wants* (simple language).
- **Specifications** → How developers will *build it* (technical details).

**How requirements are captured:**

- Stakeholder meetings, surveys, interviews
- User personas (who will use it)
- User stories (what they need)
- Validation with stakeholders

**Types of requirements:**

- **Functional:** What the system does → *“App should allow users to order food.”*
- **Non-functional:** Quality → *“Orders must be processed in < 3 sec.”*
- **System/Business:** Broader → *“App must support iOS & Android.”*

---

### 🏢 Real-Life Example: Online Shopping App

- A business wants an app for **clothes shopping**.
- **Functional:** App should have *search bar, cart, payments*.
- **Non-functional:** App should load in *under 2 seconds*.
- **System:** Must support *UPI & card payments*.
- **Business:** Should handle *10,000 users during sales*.

 All requirements are documented in an **SRS (Software Requirement Specification)**, which the client signs before development starts.

---

## Section 6

### 🔹 UML (Unified Modeling Language)

- UML is a **standardized modeling language** used to visualize, specify, construct, and document software systems.
- It helps in representing **workflows, system design, and interactions** through diagrams like **use case, class, sequence, and activity diagrams**.