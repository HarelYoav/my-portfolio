# Fetching the latest node image on apline linux
#FROM --platform=linux/arm/v7,linux/arm64/v8,linux/amd64 node:alpine AS builder

FROM node:alpine AS builder

# Setting up the work directory
WORKDIR /app

# Installing dependencies
COPY ./package.json ./
RUN npm install

# Copying all the files in our project
COPY . .

# Building our application
RUN npm run build

# Fetching the latest nginx image
FROM nginx

# Copying built assets from builder
COPY --from=builder /app/build /usr/share/nginx/html

# Copying our nginx.conf
COPY nginx.conf /etc/nginx/conf.d/default.conf

LABEL key="build using buildx"
