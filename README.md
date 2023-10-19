# ihomer NX Workshop

This repository contains a simple todo application. It contains an Angular application for the frontend and an Express application for the backend. We use this repository to demonstrate the capabilities of [Nx](https://nx.dev).

To see the final result, checkout the `final` branch.

## Pre-requisites
- Node.js 18+ (https://nodejs.org)
- Git (https://git-scm.com)
- Editor of your choice (VS Code is preferred)

## Getting Started
Clone this repository and install the dependencies:
```bash
git clone https://github.com/IHomer/nx-workshop.git
cd nx-workshop
npm install
```

## Running the application
To run the application, you need to start both the frontend and the backend. You can do this by running the following commands in two separate terminals:
```bash
npx nx run todo-api:serve
```
```bash
npx nx run todo-app:serve
```
