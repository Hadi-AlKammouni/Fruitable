const io = require("socket.io")(8900,{
    cors: {
        origin: "http://localhost:3000",
    }
})

let groceries = []

const addGrocery = (groceryId,socketId) => {
    !groceries.some(grocery=>grocery.groceryId === groceryId) 
    && groceries.push({groceryId,socketId})
}

const removeGrocery = (socketId) => {
    groceries = groceries.filter((groceries) => groceries.socketId !== socketId)
}

const getGrocery = (groceryId) => {
    return groceries.find(grocery => grocery.groceryId === groceryId)
}

io.on("connection", (socket) => {
    // When connect 
    console.log(" a user connected.")

    // Take groceryId and socketId from groceries
    socket.on("addGrocery", (groceryId )=> {
        addGrocery(groceryId,socket.id)
        io.emit("getGroceries", groceries)
    })

    // Send and get message
    socket.on("sendMessage", ({sendedrId,receiverId,text}) => {
        const grocery = getGrocery(receiverId)
        io.to(grocery.socketId).emit("getMessage",{
            sendedrId,
            text
        })
    })

    // When disconnect
    socket.on("disconnect", () => {
        console.log("a user disconnected")
        removeGrocery(socket.id)
        io.emit("getGroceries", groceries)
    })
})