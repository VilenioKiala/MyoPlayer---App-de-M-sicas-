
function Login(){
    const [loginData,setLoginData] = React.useState({
        username: "",
        password:""
    })
    const [error,setError] = React.useState("")
    const [loading,setLoading] = React.useState(false)

    function handleChange(e){
        setLoginData({
            ...loginData,
            [e.target.name]: e.target.value,
        })
    }

    function handleSubmit(){
        setError("")
        setLoading(true)
        axios.post("/api/login/",{
            ...loginData,
        },(error)=>console.log(error))
        .then(resp=>{
            document.location.replace("/admin/")
        })
        .catch(error=>{
            setError(error.response.data.error)
            setLoading(false)
        })
    }

    return (
        <div>
            {
                loading &&
                    <p>Loading</p>
            }

            {
                error.length > 0 &&
                    <small>{error}</small> 
            }
            <input type="text" name="username" value={loginData.username} onChange={handleChange}/>
            <input type="text" name="password" value={loginData.password} onChange={handleChange}/>
            <button onClick={handleSubmit}>Logar</button>
        </div>
    )
}

ReactDOM.render(<Login/>,document.getElementById("root"))