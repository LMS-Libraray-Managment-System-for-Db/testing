import json
from locust import HttpUser, task, between
# Initialize seven empty lists to hold the columns
title = []
author = []
isbn = []
type = []
total_copies = []
available_copies = []
genreNames = []

# Read the JSON file
with open('output2.json') as jsonfile:
    data = json.load(jsonfile)
    for row in data:
        # Append each column's data to the corresponding list
        title.append(row['title'])
        author.append(row['author'])
        isbn.append(row['isbn'])
        type.append(row['type'])
        total_copies.append(row['total_copies'])
        available_copies.append(row['available_copies'])
        genreNames.append(row['genreNames'])




    
    

class MyUser(HttpUser):
    wait_time = between(1, 5)  # Wait time between task execution

    def on_start(self):
        self.x = 4
        response = self.client.post("/api/v1/user/login", json={"email": "kamal@gmail.com", "password": "fathykamal1234"})
        token = response.json().get("token")
        print(f"token: {response.content}")
        # Set the token in the user's session headers
        self.client.headers.update({"Authorization": f"{token}"})
        

    @task
    def perform_get_with_token(self):
        # Send the GET request with the token in the headers
        response = self.client.post("/api/v1/book/add", json={
            "title": title[self.x],
            "author": author[self.x],
            "isbn": isbn[self.x],
            "type": type[self.x],
            "total_copies": total_copies[self.x],
            "available_copies": available_copies[self.x],
            "genreNames": genreNames[self.x]
            })
        msg = response.json().get("msg")
        
        if msg ==  "Book added successfully":
            self.x += 1
            if self.x >= 133:
                self.stop()
        else:
            with open('failed_books.json', 'r') as file:
                data = json.load(file)

            # Step 2: Modify the loaded data by adding your new data
                new_data = {
                "title": title[self.x],
                "author": author[self.x],
                "isbn": isbn[self.x],
                "type": type[self.x],
                "total_copies": total_copies[self.x],
                "available_copies": available_copies[self.x],
                "genreNames": genreNames[self.x]
                }  
                data["failed"] = new_data  

            # Step 3: Write the modified data back to the JSON file
            with open('failed_books.json', 'w') as file:
                json.dump(data, file, indent=4)
                
                
        print(f"Counter value: {self.x}")
        
           
        
