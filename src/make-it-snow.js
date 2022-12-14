"use strict";

const makeItSnow = ({
  zIndex = 2000,
  numberOfSnowflakes = 100,
  width = 25,
  directionBias = 0,
  step = 2,
}) => {
  const encodedImage =
    "PHN2ZyB2ZXJzaW9uPSIxLjEiIGlkPSJDYXBhXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IgogICAgIHZpZXdCb3g9IjAgMCAyOTggMjk4IiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCAyOTggMjk4OyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+CjxnIGZpbGw9IiNGRkZGRkYiIHN0cm9rZT0ibm9uZSI+Cgk8cGF0aCBkPSJNMjg5LjUsMTQwLjVoLTI0LjYwNmwxMS4wMzEtMTEuMDNjMi45My0yLjkyOSwyLjkzLTcuNjc4LDAuMDAxLTEwLjYwNmMtMi45MjktMi45MjktNy42NzgtMi45My0xMC42MDYtMC4wMDEKCQlMMjQzLjY4MSwxNDAuNWgtMzYuMzY5bDE2LjE4Mi0xNy4zOTJjMi44MjEtMy4wMzIsMi42NS03Ljc3Ny0wLjM4My0xMC42Yy0xLjI0My0xLjE1Ni0yLjc3NS0xLjgwMi00LjM0NS0xLjk2MQoJCWMtMC45NTItMC4wNDctMjEuNDk1LTAuMDAzLTIxLjQ5NS0wLjAwM0wyMjEuMzE1LDg2LjVIMjUxLjVjNC4xNDMsMCw3LjUtMy4zNTcsNy41LTcuNXMtMy4zNTctNy41LTcuNS03LjVoLTE1LjE4NmwxNy42OS0xNy42OQoJCWMyLjkyOS0yLjkzLDIuOTI5LTcuNjc4LDAtMTAuNjA4Yy0yLjkzLTIuOTI4LTcuODQ0LTIuOTI4LTEwLjc3NCwwTDIyNS4xNjcsNjEuMVY0NS41YzAtNC4xNDMtMy4zNTctNy41LTcuNS03LjUKCQljLTQuMTQzLDAtNy41LDMuMzU3LTcuNSw3LjV2MzAuNjAxbC0yNC44MzcsMjUuMDA0bC0wLjQxNS0yMi42NDVjLTAuMDAxLTAuMDM2LDAuMDM1LTAuMDcsMC4wMzQtMC4xMDYKCQljLTAuMDM1LTEuODI0LTAuNzA0LTMuNjQxLTIuMDctNS4wNTljLTIuODczLTIuOTgyLTcuNzc4LTMuMDctMTAuNzYxLTAuMTk0bC0xNS45NTEsMTUuMjI2VjUzLjEwN2wyMS40Ny0yMS4zMDQKCQljMi45MjktMi45MywzLjAxMi03LjY3OCwwLjA4My0xMC42MDdjLTIuOTMtMi45MjgtNy44MDMtMi45MjgtMTAuNzMyLDBsLTEwLjgyMSwxMC42OTZWNy41YzAtNC4xNDMtMy4zNTctNy41LTcuNS03LjUKCQljLTQuMTQzLDAtNy41LDMuMzU3LTcuNSw3LjV2MjQuMzkzbC0xMC41My0xMC42OTZjLTIuOTMtMi45MjgtNy41OTQtMi45MjgtMTAuNTI0LDBjLTIuOTI5LDIuOTMtMy4wNTQsNy42NzgtMC4xMjUsMTAuNjA3CgkJbDIxLjE3OSwyMS4zMDR2MzUuNDIxbC0xNi4xNzYtMTUuNDc1Yy0zLjAwOS0yLjg0Ny03LjY3LTIuNzE4LTEwLjUyLDAuMjg5Yy0xLjA3NSwxLjEzNi0xLjY4MywyLjUyLTEuOTE0LDMuOTU1CgkJYy0wLjE0MiwwLjU4My0wLjIwMywxLjE4OC0wLjIwMSwxLjgxMWwtMC4wODgsMjEuMjI5bC0yNS4xLTI0Ljk0NFY0NS41YzAtNC4xNDMtMy4zNTctNy41LTcuNS03LjVzLTcuNSwzLjM1Ny03LjUsNy41djE0Ljg5NAoJCUw1NS4xNDIsNDMuMjAyYy0yLjkzLTIuOTI4LTcuNTk0LTIuOTI4LTEwLjUyNCwwYy0yLjkyOSwyLjkzLTIuODg3LDcuNjc4LDAuMDQyLDEwLjYwOEw2Mi4zOTIsNzEuNUg0Ni41CgkJYy00LjE0MywwLTcuNSwzLjM1Ny03LjUsNy41czMuMzU3LDcuNSw3LjUsNy41aDMwLjg5MmwyNC43NDQsMjQuNzQ0bC0yMy4wNTcsMC44MzFjLTQuMDIxLDAuMTQ2LTcuNTI0LDMuNDM1LTcuNTYzLDcuNDE4CgkJYy0wLjAwNCwwLjExMi0wLjM0OSwwLjIyNS0wLjM0OSwwLjMzN2MwLDAuMDAzLDAsMC4wMDcsMCwwLjAxMWMwLDAuMDA4LDAuMzQ1LDAuMDE3LDAuMzQ1LDAuMDI0CgkJYzAuMDQ1LDEuODc1LDAuOTU1LDMuNzM2LDIuMzk1LDUuMTU4TDg5Ljc0OCwxNDAuNUg1NS4wMjVsLTIxLjYzOC0yMS42MzhjLTIuOTMtMi45MjgtNy42NzgtMi45MjgtMTAuNjA3LDAKCQljLTIuOTI5LDIuOTMtMi45MjksNy42NzgsMCwxMC42MDdsMTEuMDMsMTEuMDNIOC41Yy00LjE0MywwLTcuNSwzLjM1Ny03LjUsNy41czMuMzU3LDcuNSw3LjUsNy41aDI1LjAyTDIyLjc4LDE2Ni4yMzkKCQljLTIuOTI5LDIuOTMtMi45MjksNy42NzgsMCwxMC42MDdjMS40NjUsMS40NjQsMy4zODUsMi4xOTYsNS4zMDQsMi4xOTZjMS45MTksMCwzLjgzOS0wLjczMiw1LjMwNC0yLjE5Nkw1NC43MzQsMTU1LjVoMzUuMDI3CgkJbC0xNS4yNTMsMTYuMzk0Yy0yLjgyMSwzLjAzMi0yLjY1LDcuNzc3LDAuMzgzLDEwLjZjMS40NDQsMS4zNDQsMy4yNzcsMi4wMDksNS4xMDYsMi4wMDljMC4wMzQsMCwwLjA2OC0wLjAwNSwwLjEwMy0wLjAwNQoJCWMwLjAyMiwwLDAuMDQ0LDAuMDAzLDAuMDY1LDAuMDAzYzAuMDE4LDAsMC4wMzcsMCwwLjA1NSwwbDIyLjAwNS0wLjEyNUw3Ny4xMDEsMjA5LjVINDYuNWMtNC4xNDMsMC03LjUsMy4zNTctNy41LDcuNQoJCXMzLjM1Nyw3LjUsNy41LDcuNWgxNS42MDFsLTE3LjM5OSwxNy4zOTljLTIuOTI5LDIuOTMtMi45MjksNy42NzgsMCwxMC42MDdjMS40NjUsMS40NjQsMy4zODUsMi4xOTYsNS4zMDQsMi4xOTYKCQljMS45MTksMCwzLjY3Mi0wLjczMiw1LjEzNy0yLjE5NmwxNy4wMjUtMTcuMTkxVjI1MC41YzAsNC4xNDMsMy4zNTcsNy41LDcuNSw3LjVzNy41LTMuMzU3LDcuNS03LjV2LTMwLjE4NWwyNS40NDUtMjUuMjc4CgkJbDAuOTc3LDI0LjM5YzAuMTQ4LDQuMDQ2LDMuNTE3LDcuMzA2LDcuNTMyLDcuMjI1YzEuMzY0LTAuMDI3LDIuODQ0LTAuNDY1LDQuMzEyLTEuNTQzYzEuMDYzLTAuNzgxLDE1LjczNC0xNS44MTIsMTUuNzM0LTE1LjgxMgoJCXYzNS4zODVsLTIwLjk3MSwyMS4xMzdjLTIuOTMsMi45MjktMi44NDYsNy42NzgsMC4wODIsMTAuNjA3YzEuNDY1LDEuNDY1LDMuNDI1LDIuMTk3LDUuMzQ1LDIuMTk3CgkJYzEuOTE5LDAsMy42OTMtMC43MzIsNS4xNTctMi4xOTZsMTAuMzg3LTEwLjUzMlYyOTAuNWMwLDQuMTQzLDMuMzU3LDcuNSw3LjUsNy41YzQuMTQzLDAsNy41LTMuMzU3LDcuNS03LjV2LTI1LjMxbDExLjQwNCwxMS4yMzcKCQljMS40NjUsMS40NjQsMy40NjgsMi4xOTYsNS4zODcsMi4xOTZjMS45MTksMCwzLjg4MS0wLjczMiw1LjM0NS0yLjE5NmMyLjkyOS0yLjkzLDIuNzgzLTcuNjc4LTAuMTQ2LTEwLjYwN2wtMjEuOTktMjEuODQ1di0zNS43CgkJYzAsMCwxMy43MjksMTIuODk2LDE1Ljg5NiwxNC45NzZjMi4xNjcsMi4wOCwzLjk0MiwzLjI1LDYuNTI1LDMuMjVjMC4wMTUsMCwwLjAzLDAsMC4wNDYsMGM0LjE0MiwwLDcuNDgtMy42MDQsNy40NTUtNy43NDYKCQlsLTAuMzA2LTIzLjY5NmwyNC4zODQsMjQuNTUxVjI1MC41YzAsNC4xNDMsMy4zNTcsNy41LDcuNSw3LjVjNC4xNDMsMCw3LjUtMy4zNTcsNy41LTcuNXYtMTUuODkxbDE4LjA2NCwxNy44OTcKCQljMS40NjUsMS40NjQsMy40NjcsMi4xOTYsNS4zODcsMi4xOTZjMS45MTksMCwzLjg4LTAuNzMyLDUuMzQ1LTIuMTk2YzIuOTI5LTIuOTMsMi45NS03LjY3OCwwLjAyMS0xMC42MDdMMjM2LjYwNSwyMjQuNUgyNTEuNQoJCWM0LjE0MywwLDcuNS0zLjM1Nyw3LjUtNy41cy0zLjM1Ny03LjUtNy41LTcuNWgtMjkuODk0bC0yNS43NDItMjUuNzQybDIzLjA1OS0wLjgzMWMwLjA4Mi0wLjAwMywwLjE2Mi0wLjAxNiwwLjI0My0wLjAyMQoJCWMwLjAzLTAuMDAyLDAuMDYtMC4wMDUsMC4wOS0wLjAwOGMzLjk3Ny0wLjMxOSw3LjAzNy0zLjcwOSw2Ljg5Mi03LjczNmMtMC4wODctMi40MjQtMS4zMi00LjUzMS0zLjE1NS01LjgzN0wyMDkuMTM4LDE1NS41aDM0LjgzNQoJCWwyMS4zNDUsMjEuMzQ2YzEuNDY1LDEuNDY1LDMuMzg0LDIuMTk3LDUuMzA0LDIuMTk3YzEuOTE5LDAsMy44MzktMC43MzIsNS4zMDMtMi4xOTZjMi45My0yLjkyOSwyLjkzLTcuNjc4LDAuMDAxLTEwLjYwNgoJCWwtMTAuNzQtMTAuNzRIMjg5LjVjNC4xNDMsMCw3LjUtMy4zNTcsNy41LTcuNVMyOTMuNjQzLDE0MC41LDI4OS41LDE0MC41eiBNMjAwLjc5NSwxMjUuNDgzTDE4Ni44MjMsMTQwLjVoLTE5LjUwN2wxNS4wMDItMTUuMDAyCgkJTDIwMC43OTUsMTI1LjQ4M3ogTTE3MC4yMSw5NS43ODRsMC4zNTYsMjAuMDAybC0xNC4zOTksMTQuMzE1VjEwOS4xNkwxNzAuMjEsOTUuNzg0eiBNMTI3LjI2Myw5NS44NjVsMTMuOTA0LDEzLjMyM3YyMC4yMDUKCQlsLTEzLjkyNS0xNC4wMDhMMTI3LjI2Myw5NS44NjV6IE05Ni44NjIsMTI2LjQ0NGwxOS43NjItMC43MTJsMTQuNzY4LDE0Ljc2OGgtMjAuMjk5TDk2Ljg2MiwxMjYuNDQ0eiBNOTcuMjQ2LDE2OS40NzcKCQlMMTEwLjI1LDE1NS41aDIwLjg1MWwtMTMuODQxLDEzLjg0MUw5Ny4yNDYsMTY5LjQ3N3ogTTEyNy44NjMsMjAxLjU5OWwtMC44NTQtMjEuMDQybDE0LjE1OC0xNC4yNDF2MjEuNjA0TDEyNy44NjMsMjAxLjU5OXoKCQkgTTE3MC44MTksMjAxLjI2NGwtMTQuNjUyLTEzLjQ3OHYtMjIuMTc5bDE0LjQ0MiwxNC4zNTlMMTcwLjgxOSwyMDEuMjY0eiBNMjAwLjk5MSwxNjguNTY0bC0xOS42MTQsMC43MDZsLTEzLjc3LTEzLjc3aDIwLjI5MgoJCUwyMDAuOTkxLDE2OC41NjR6Ii8+CjwvZz4KPC9zdmc+Cg==";
  let body = document.body,
    html = document.documentElement;
  let height = Math.max(
    body.scrollHeight,
    body.offsetHeight,
    html.clientHeight,
    html.scrollHeight,
    html.offsetHeight
  );
  let reqAnimationId = null;
  let snowflakes = [];

  // Drifting to the right
  const xMovementRight = [1, 1, 1, 1, 1, 1, -1, -1, 0, 0, 0, 0, 0, 0, 0];
  // Drifting to the left
  const xMovementLeft = [-1, -1, -1, -1, -1, -1, 1, 1, 0, 0, 0, 0, 0, 0, 0];
  // Mostly vertical
  const xMovementVertical = [-1, -1, -1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0];

  window.addEventListener("resize", () => {
    snowflakes.forEach(({ image }) => {
      document.querySelector("body").removeChild(image);
    });
    snowflakes = [];
    cancelAnimationFrame(reqAnimationId);
    height = Math.max(
      body.scrollHeight,
      body.offsetHeight,
      html.clientHeight,
      html.scrollHeight,
      html.offsetHeight
    );
    generateSnowflakes();
    animate();
  });

  const generateSnowflakes = () => {
    for (let i = 0; i < numberOfSnowflakes; i++) {
      const x = Math.round(Math.random() * window.innerWidth);
      const y = Math.round(Math.random() * height);
      const image = new Image();
      image.src = "data:image/svg+xml;base64, " + encodedImage;
      image.style.width = `${width}px`;
      image.style.position = "absolute";
      image.style.left = `${x}px`;
      image.style.top = `${y}px`;
      image.style.zIndex = zIndex;
      image.onload = () => {
        document.querySelector("body").appendChild(image);
        snowflakes[i].ready = true;
      };
      snowflakes.push({ x, y, image, ready: false });
    }
  };

  const animate = () => {
    reqAnimationId = requestAnimationFrame(animate);
    for (let i = 0; i < snowflakes.length; i++) {
      if (snowflakes[i].ready) {
        if (snowflakes[i].y > height) {
          snowflakes[i].y = -100;
        }

        if (snowflakes[i].x > window.innerWidth + 10) {
          snowflakes[i].x = 0;
        } else if (snowflakes[i].x < -10) {
          snowflakes[i].x = window.innerWidth;
        }

        if (directionBias < -1) {
          snowflakes[i].x +=
            xMovementLeft[Math.floor(Math.random() * xMovementLeft.length)] *
            step;
        } else if (directionBias > 0) {
          snowflakes[i].x +=
            xMovementRight[Math.floor(Math.random() * xMovementRight.length)] *
            step;
        } else {
          snowflakes[i].x +=
            xMovementVertical[
              Math.floor(Math.random() * xMovementVertical.length)
            ] * step;
        }

        snowflakes[i].y += step;
        snowflakes[i].image.style.top = `${snowflakes[i].y}px`;
        snowflakes[i].image.style.left = `${snowflakes[i].x}px`;
      }
    }
  };

  generateSnowflakes();
  animate();
};

export default makeItSnow;
