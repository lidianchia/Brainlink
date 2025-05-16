FROM alpine/git AS builder

RUN git clone --branch dist --depth 1 https://github.com/ittuann/qingshanasd.git /app && rm -rf /app/.git

FROM nginx:alpine

LABEL org.opencontainers.image.authors="ittuann@outlook.com"

COPY --from=builder /app/ /usr/share/nginx/html/

# COPY nginx.conf /etc/nginx/nginx.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
