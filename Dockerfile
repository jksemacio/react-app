FROM node AS builder
WORKDIR /app
COPY package.json /app
# Creating tar of productions dependencies
RUN npm install --production && npm cache clean && cp -rp ./node_modules /tmp/node_modules
RUN npm install && npm cache clean
COPY . /app
RUN npm run build

FROM node AS runner
EXPOSE 3000
WORKDIR /app
# Adding production dependencies to image
COPY --from=builder /tmp/node_modules /app/node_modules
# Adding build produced from builder
COPY --from=builder /app/build /app/build
COPY . /app
CMD npm start