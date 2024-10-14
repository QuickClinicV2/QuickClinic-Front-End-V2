FROM node:20-alpine@sha256:c13b26e7e602ef2f1074aef304ce6e9b7dd284c419b35d89fcf3cc8e44a8def9 AS builder

WORKDIR /var/www/web
COPY package*.json ./
RUN npm ci

COPY . . 

RUN npm run build

# Production layer
FROM node:20-alpine@sha256:c13b26e7e602ef2f1074aef304ce6e9b7dd284c419b35d89fcf3cc8e44a8def9 AS runner

WORKDIR /var/www/web
RUN chown -R node:node /var/www/web
USER node
COPY --chown=node:node --from=builder /var/www/web .

CMD ["npm", "start"]