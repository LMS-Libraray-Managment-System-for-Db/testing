from faker import Faker
from locust import HttpUser, task, between 
import random
import string


fake = Faker()

def generate_password(length=8):
    characters = string.ascii_letters + string.digits + string.punctuation
    return ''.join(random.choice(string.digits) for i in range(length))

   

class MyUser(HttpUser):
    wait_time = between(1, 5)  
    
    def on_start(self):
        email = fake.user_name()
        password = generate_password()
        header ={
            "username":email,
            "account_type":"student",
            "email":email+"@gmail.com",
            "password":password
        }
        
        
        with open("G:/college data/4th year/2nd term/database/tests/test5/emails_and_passwords.txt", "a") as file:
            
            file.write(f"Email   : {email}\n")
            file.write(f"Password: {password}\n\n")
           
        
        response = self.client.post("/api/v1/user/register", json=header)
        token = response.json().get("token")
        self.client.headers.update({"Authorization": f"{token}"})
        

    
    @task
    def patron_see_resrevations(self):
        response = self.client.get("/api/v1/book/getResrevations")
        
            
    
    
    @task
    def patron_profile(self):
        response = self.client.get("/api/v1/user/profile")
        with open("G:/college data/4th year/2nd term/database/tests/test5/emails_and_passwords.txt", "a") as file:
            file.write(f"response : {response.content} \n")
    
    
    
    
    
        
        
    