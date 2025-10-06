# ---------------------------
# Backend Dockerfile
# ---------------------------
# Use Node 18 Alpine as base image
FROM node:20-alpine

# Set working directory inside container
WORKDIR /app

# Copy only package files first (for better caching)
COPY package*.json ./

# Copy the rest of the backend code
COPY . .

# Install openssl and curl for Prisma engine download
RUN apk add --no-cache openssl curl

# Generate Prisma client
RUN npx prisma generate

# Expose backend port
EXPOSE 5000

# Start backend
CMD ["npm", "run", "dev"]
