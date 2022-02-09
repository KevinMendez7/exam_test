FROM tiangolo/node-frontend:10 as build-stage

#give ARG REACT_APP_URL_SERVICE a default value
ARG REACT_APP_URL_SERVICE=URL_FROM_SERVER

WORKDIR /app

ENV REACT_APP_URL_SERVICE $REACT_APP_URL_SERVICE

COPY package*.json /app/
RUN npm install
COPY ./ /app/
RUN npm run build
# Stage 1, based on Nginx, to have only the compiled app, ready for production with Nginx
FROM nginx:1.15
COPY --from=build-stage /app/build/ /usr/share/nginx/html
# Copy the default nginx.conf provided by tiangolo/node-frontend
COPY --from=build-stage /nginx.conf /etc/nginx/conf.d/default.conf