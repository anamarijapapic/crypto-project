# crypto-project

## Table of Contents

* [General Info](#general-info)
* [Technologies](#technologies)
* [Screenshots](#screenshots)
* [Getting Started](#getting-started)
* [Credits](#credits)

## General Info

A Next.js-based crypto project that fetches and visualizes blockchain data for Bitcoin (BTC) and Litecoin (LTC). Features include fetching the latest blocks over predefined intervals (24H, 3D, 1M, 1Y), real-time updates via WebSocket, and Redis caching for efficient data retrieval. Displays mining-related graph visualizations such as block fee rates, block fee vs subsidy, and block rewards using React Chart.js.

> Project created as a university project:  
> *DPR013 - Cryptocurrency Technologies*  
> *University of Split - University Department of Professional Studies*

- [papic_projekt.pdf](https://github.com/anamarijapapic/crypto-project/blob/master/papic_projekt.pdf) - Project paper

## Technologies

![Next.js](https://img.shields.io/badge/Next.js-%23000000.svg?style=for-the-badge&logo=next.js&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-%23f7df1e.svg?style=for-the-badge&logo=javascript&logoColor=black)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-%231a202c.svg?style=for-the-badge&logo=tailwind-css&logoColor=white)
![Bitcoin RPC API](https://img.shields.io/badge/Bitcoin_RPC_API-%23F2A900.svg?style=for-the-badge&logo=bitcoin&logoColor=white)
![Redis](https://img.shields.io/badge/Redis-%23DC382D.svg?style=for-the-badge&logo=redis&logoColor=white)
![Socket.io](https://img.shields.io/badge/Socket.io-%23000000.svg?style=for-the-badge&logo=socket.io&logoColor=white)
![Chart.js](https://img.shields.io/badge/Chart.js-%23ff6384.svg?style=for-the-badge&logo=chart.js&logoColor=white)

## Screenshots

<details open="open">
  <summary><strong>Blockchain Explorer: Confirmed Blocks</strong></summary>
  <figure>
    <img src="https://github.com/user-attachments/assets/34b47c9c-a166-449e-b3d4-c88a8758d881"
         alt="Blockchain Explorer (Confirmed Blocks)">
    <figcaption>Figure 1: A menu with time intervals and a real-time display of the blockchain.</figcaption>
  </figure>
</details>

<details>
  <summary><strong>Block Fee Rates (Graphs)</strong></summary>
  <figure>
    <img src="https://github.com/user-attachments/assets/fe3c4edf-88ad-4b60-b25d-40af9b86d07f"
         alt="Block Fee Rates (24H)">
    <figcaption>Figure 2: Visual representation of block fee rates over 24 hours.</figcaption>
  </figure>
  <figure>
    <img src="https://github.com/user-attachments/assets/3d98e347-ea58-4433-9256-af33c4ca4990"
         alt="Block Fee Rates (3D)">
    <figcaption>Figure 3: Visual representation of block fee rates over 3 days.</figcaption>
  </figure>
  <figure>
    <img src="https://github.com/user-attachments/assets/efec44fb-849d-49fc-b29d-d5cc228377e3"
         alt="Block Fee Rates (1W)">
    <figcaption>Figure 4: Visual representation of block fee rates over 1 week.</figcaption>
  </figure>
  <figure>
    <img src="https://github.com/user-attachments/assets/82134be0-6c32-4d86-9de9-740d46f95b5e"
         alt="Block Fee Rates: Max Rates (1W)">
    <figcaption>Figure 5: Visual representation of the maximum block fee rates over 1 week.</figcaption>
  </figure>
</details>

<details>
  <summary><strong>Block Fees Vs Subsidy (Graphs)</strong></summary>
  <figure>
    <img src="https://github.com/user-attachments/assets/4c8cf2cd-ae11-44fb-a60c-bd979769496c"
         alt="Block Fees Vs Subsidy: BTC View (1W)">
    <figcaption>Figure 6: Visual representation of block fees vs subsidy for Bitcoin over 1 week.</figcaption>
  </figure>
  <figure>
    <img src="https://github.com/user-attachments/assets/577eb2b6-d77c-43c8-84ba-f3fe2d597c7f"
         alt="Block Fees Vs Subsidy: Percentage View (1W)">
    <figcaption>Figure 7: Visual representation of block fees vs subsidy as a percentage over 1 week.</figcaption>
  </figure>
</details>

<details>
  <summary><strong>Block Rewards (Graphs)</strong></summary>
  <figure>
    <img src="https://github.com/user-attachments/assets/a0d613cb-2de5-4b44-b52d-2abb49074f85"
         alt="Block Rewards (1W)">
    <figcaption>Figure 8: Visual representation of block rewards in BTC and USD over 1 week.</figcaption>
  </figure>
  <figure>
    <img src="https://github.com/user-attachments/assets/a349ee72-cecd-4328-bf75-1c3f771d68f8"
         alt="Block Rewards: Block Value (1W)">
    <figcaption>Figure 9: Visual representation of the total block value in BTC over 1 week.</figcaption>
  </figure>
</details>

## Getting Started

### Prerequisites

- Node.js
- npm
- Docker
- Access credentials for the RPC server

### Installation

1. Clone the repository
   ```sh
   git clone git@github.com:anamarijapapic/crypto-project.git
    ```
2. Position to the project folder
    ```sh
    cd crypto-project
    ```
3. Create a `.env` file from the `.env.example` file
    ```sh
    cp .env.example .env
    ```
4. Fill in the environment variables with your own values.
5. Install the dependencies
    ```sh
    npm install
    ```
6. Start Redis via Docker
    ```sh
    docker run -p 6379:6379 -it redis/redis-stack-server:latest
    ```
7. Start the development server
    ```sh
    npm run dev
    ```
8. Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Credits

- [Anamarija Papić](https://github.com/anamarijapapic)
