FROM node:20 AS build
WORKDIR /app
COPY . .
RUN npm install --force && npx ng build cateringhub --configuration production

FROM nginx:alpine
COPY --from=build /app/dist/cateringhub/browser /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
