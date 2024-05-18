from locust import HttpUser, task, between

class MyUser(HttpUser):
    wait_time = between(1, 5)  # Wait time between task execution

    def on_start(self):
        # Perform login or obtain token
        # For example, if your web application uses JWT authentication:
        response = self.client.post("/api/v1/user/login", json={"email": "fathy01015485028@gmail.com", "password": "fathykamal1234"})
        token = response.json().get("token")
        print(f"token: {response.content}")
        # Set the token in the user's session headers
        self.client.headers.update({"Authorization": f"{token}"})

    @task
    def perform_get_with_token(self):
        # Send the GET request with the token in the headers
        response = self.client.get("/api/v1/user/admin/allUsers?page=1")

        # Print response status code and content
        print(f"Response status code: {response.status_code}")
        print(f"Response content: {response.content}")
