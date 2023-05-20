import mongoose from "mongoose"

const connectDB = () => {
    mongoose.connect(process.env.MONGO_URI, {
        dbName: "backendapi"
    })
        .then((c) => console.log(`Database connected to ${c.connection.host}`))
        .catch((e) => console.log(e))

}
export default connectDB;