###################
# BUILD FOR PRODUCTION
###################

FROM node:20-alpine AS build

RUN apk add --no-cache openssl libc6-compat

WORKDIR /usr/src/adgeniusback

COPY --chown=node:node package.json ./
COPY --chown=node:node yarn.lock ./

RUN npm pkg delete scripts.prepare

RUN apk add --no-cache openssl
COPY --chown=node:node prisma ./prisma
RUN npx prisma generate

RUN yarn
COPY --chown=node:node . .
RUN npm run build

ENV NODE_ENV=production
RUN yarn install --prod

USER node

###################
# PRODUCTION
###################

FROM node:20-alpine AS production

WORKDIR /usr/src/adgeniusback

RUN apk add --no-cache openssl

COPY --chown=node:node --from=build /usr/src/adgeniusback/node_modules ./node_modules
COPY --chown=node:node --from=build /usr/src/adgeniusback/dist ./dist
COPY --chown=node:node --from=build /usr/src/adgeniusback/prisma ./prisma

RUN npm install pm2 -g

CMD ["pm2-runtime", "dist/main.js"]
