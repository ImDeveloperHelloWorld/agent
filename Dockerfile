# Dockerfile

FROM node:20-slim

# Set working directory
WORKDIR /app

# Copy package files
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy source files
COPY . .

# Build TypeScript if needed
RUN npm run build

# Expose no port (agent is outbound-only)
CMD ["node", "dist/index.js"]