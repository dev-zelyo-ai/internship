# UPI

The UPI (Unified Payments Interface) system design works as a real-time inter-bank payment system that enables instant fund transfer between bank accounts via mobile or web interfaces, orchestrated by the National Payments Corporation of India (NPCI). The core design includes user interfaces (mobile apps, web, USSD), a centralized UPI switch managed by NPCI that routes transaction requests between banks, and backend banking systems that verify account details, balances, and complete settlements securely and instantly.

## Problem Statement

The problem statement of UPI was to solve the fragmentation, complexity, and limited reach of digital payment systems in India, which hindered financial inclusion and the widespread use of cashless transactions. Before UPI, digital payments were slow, costly, and lacked interoperability across banks and platforms. UPI was created to provide a simple, instant, secure, and interoperable payment platform accessible 24/7 via mobile devices, reducing dependence on cash and physical cards while enabling easy peer-to-peer and merchant payments across the country.

## Functional Requirements

- **User Registration and Authentication:** Users must register and securely authenticate using PIN or biometrics to access UPI services.
- **Bank Account Linking:** Users can link multiple bank accounts to their UPI ID for seamless transactions.
- **Virtual Payment Address (VPA) Management:** Create and manage VPAs to make payments without sharing bank details.
- **Money Transfer:** Supports peer-to-peer and merchant payments instantly via UPI.
- **Transaction History:** Users can view past transactions with details like status and timestamps.
- **Notifications:** Real-time alerts for payment success, failure, or requests ensure users stay informed.
- **Payment Requests:** Users can request money from others easily through UPI.
- **QR Code Payments:** Generate and scan QR codes for quick, contactless payments.
- **Bill Payments:** Support for paying utility bills and recurring expenses through UPI.

## Non-Functional Requirements

- **Scalability:** Must handle millions of users and huge transaction volumes efficiently.
- **Performance:** Process transactions with low latency for instant payments.
- **Reliability:** Ensure continuous availability with failover and minimal downtime.
- **Security:** Implement strong encryption, multi-factor authentication, and fraud detection.
- **Consistency:** Guarantee transaction accuracy and prevent duplicates or errors.
- **Compliance:** Follow regulatory guidelines and protect user data privacy.
- **Usability:** Provide a simple, user-friendly interface accessible to all user types.

## High Level Diagram

![image.png](01-UPI_images/HLD_UPI.png)

Here’s a step-by-step explanation of each component and step in the process:

## Step 1: User Initiation with VPA

- The **sender** initiates a payment request using their chosen UPI app (such as PhonePe or GPay) and enters the recipient’s Virtual Payment Address (VPA) or scans a QR code for payment.
- The VPA acts as a unique identifier for the recipient without sharing sensitive bank details.

## Step 2: PSP (Payment Service Provider) Processing

- The sender's UPI app connects with the **PSP (Payment Service Provider)**, which could be the bank supporting the user's app.
- Here, the PSP validates the user's VPA/QR, checks account linkage, and prepares the transaction request.

## Step 3: Routing to Issuer Bank (e.g., HDFC)

- The transaction is forwarded from the PSP to the sender’s **issuer bank** (e.g., HDFC for debit).
- The issuer bank verifies the sender’s account, checks for sufficient funds, and authorizes the transaction debit.

## Step 4: Transaction Routing via NPCI

- The validated transaction is routed to the **NPCI (National Payments Corporation of India)**, which operates the UPI infrastructure.
- NPCI acts as a clearinghouse, forwarding the request, ensuring security, and managing transaction logs.

## Step 5: Forwarding to Beneficiary Bank (e.g., SBI)

- NPCI routes the payment request to the **beneficiary’s bank** (e.g., SBI for credit).
- The beneficiary bank verifies the recipient’s VPA/account and processes the credit for the transaction.

## Step 6: Credit Confirmation to Recipient

- Once the funds are credited, the beneficiary’s PSP (connected with the recipient’s UPI app, e.g., GPay) updates the transaction status.
- The recipient is notified via app notification, and funds are immediately available in their account.

## Step 7: End User Receives Money

- The **recipient** receives the credited funds, visible both within the GPay app and in the linked bank account, completing the UPI transaction lifecycle.

## Low Level Diagram

![image.png](01-UPI_images/LLD_UPI.png)

## 1. User Access Channels

- **Mobile Application**: Users initiate or receive payments via UPI-enabled banking/third-party apps (e.g., PhonePe, Google Pay). These apps offer endpoints for sending, receiving, and requesting money using the UPI rails.
- **3rd Party Apps (Collect Only)**: Billers, merchants, or service providers use these apps only to generate “collect” requests. They can’t send payments but can request money for bills or services.
- **Internet Banking**: UPI access is also integrated into bank internet portals, letting users perform UPI actions via desktops/laptops.
- **Dial**: Users without internet/smartphones can dial *99# (USSD) from basic mobile phones, entering payment instructions directly.

---

## 2. Standard Interface/PSPs (Payment Service Providers)

- All types of client apps interact with their bank (or sponsoring institution) through a standardized API/interface. The standard ensures interoperability—any UPI app can transact with any bank that is a PSP.
- **Usage:**
    - Authenticates user credentials and verifies linked accounts.
    - Interprets and validates UPI payment requests (including P2P, collect, bill payments).
    - Handles session, PIN entry, VPA management, and user notifications.
    - Communicates requests and responses reliably with the central UPI switch.

---

## 3. Unified Payments Interface (Central Switch/System)

- This is the heart of the ecosystem, managed by NPCI.
- **Usage:**
    - Routes all interoperable payment instructions between issuing and beneficiary PSPs (banks/apps).
    - Handles end-to-end authorization, settlement initiation, status tracking, and notification updates.
    - Ensures security, maintains transaction logs, and supports regulatory reporting.
    - Integrates with multiple backend payment channels and services.
    - Ensures all players (banks, fintech, billers, users) talk in a “unified language” for seamless digital payments.

---

## 4. Backend Payment Rails and Ancillary Services

### 1. IMPS (Immediate Payment Service)

- **Purpose:** IMPS enables instant, real-time fund transfers between bank accounts across India, 24/7.
- **Role in UPI:** UPI often uses IMPS as the underlying settlement engine for the fast transfer of money between the payer's and payee's bank accounts in real time.
- **Capabilities:** Supports immediate debit and credit operations with confirmation delivered within seconds.
- **Usage:** Ideal for small to medium-value transactions, ensuring funds are available instantly to recipients, making UPI payments seamless.

---

### 2. AEPS (Aadhaar Enabled Payment System)

- **Purpose:** AEPS allows basic banking transactions using Aadhaar biometric authentication, targeted especially for financial inclusion.
- **Role in UPI:** UPI integrates AEPS to support transactions authenticated through Aadhaar biometrics, helping rural and underbanked populations transact digitally.
- **Capabilities:** Supports balance enquiry, cash deposit, withdrawal, and fund transfer via biometric-enabled banking outlets.
- **Usage:** Enables customers without smartphones or digital literacy to leverage secure digital payments and banking through biometric verification.

---

### 3. APBS / NACH (Aadhaar Payments Bridge System / National Automated Clearing House)

- **Purpose:** These systems handle bulk, automated, low-value credit transactions like government subsidies, salaries, pensions, and recurring payments.
- **Role in UPI:** UPI connects with APBS/NACH to automate large-scale credit disbursements systematically and integrate such payments into the UPI platform.
- **Capabilities:** Facilitates scheduled bulk payments and direct benefit transfers (DBTs) from government and businesses.
- **Usage:** Ensures timely and direct credit of funds to beneficiaries’ bank accounts via UPI, enhancing government-to-person and business-to-person transfers.

---

### 4. RuPay

- **Purpose:** RuPay is India’s domestic card payment network operating debit, credit, and prepaid card transactions.
- **Role in UPI:** RuPay integration allows UPI to support merchant payments and ATM-like card transactions linked to UPI handles, thus broadening acceptance.
- **Capabilities:** Supports card-on-UBI transactions, e-commerce, and merchant payments where UPI can interface with card credentials.
- **Usage:** Provides an additional channel for digital payments and enables frictionless card-based transactions through the UPI ecosystem.

---

### 5. Ecom (E-commerce Payment Channels)

- **Purpose:** Dedicated channels for handling online payments and settlements with merchants and service providers.
- **Role in UPI:** Supports integration of UPI with e-commerce platforms, allowing instant online checkout experiences.
- **Capabilities:** Handles secure payment authorization, settlement, and refund management for online transactions.
- **Usage:** Enables customers to pay with UPI for online shopping, bill payments, subscriptions, and service bookings instantly.

---

## 5. Central Repository

- Stores master user records: account linkage, authentication tokens, VPA mappings, and transaction histories.
- Provides a source of truth for verifying identities, resolving disputes, tracing payments, and supporting audits.
- Integrates with payment rails and UPI core for data consistency across the entire digital ecosystem.

---

## Conclusion

In conclusion, the Unified Payments Interface (UPI) represents a transformative, open, and interoperable digital payment infrastructure that has revolutionized how financial transactions occur in India. Its scalable architecture, built on real-time payment rails like IMPS, enables instant, secure, and cost-effective payments across banks and platforms 24/7. UPI's design facilitates ease of use, broad accessibility (including smartphones and feature phones via USSD), strong security, and seamless integration with government and commercial payment systems. Its success lies in enabling multi-party transactability, simplifying authentication, supporting diverse payment methods, and fostering a highly inclusive digital economy. UPI continues to expand globally by adopting open APIs, layered security, and cross-border connectivity, positioning it as a leading model for digital payment innovation worldwide.