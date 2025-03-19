import express from "express";

const app = express();

app.get("/users", (req, res) => {
try {
const name  =  req.query.name;

if (req.query.name === ""){
    return req.status(400).send({ message: "Invalid name" });
}
const user = users.find((user) => user.name === name);

if (user) {
  return res.status(200).json({
    message: "User found",
    data:[ name : user.name, user.age, user.email],
  });
} else {
  return res.status(404).json({
    message: "User not found",
  });
}
}
catch (error) {
    console.log("error" , error);
   return res.status(500).json({ error:error});
}   
});

app.listen(3000, () => {    
  console.log("Server is running on port 3000");
});
