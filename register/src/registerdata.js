const RegisterData = ({aman}) => {
    return ( 
        <div className="dataRegister">
            {aman.map((register)=>(
                <div className="datapreview" key={register.id}>
                    <p>{register.email}</p>
                    <p>{register.password}</p>
                    <p>{register.number}</p>
                </div>
            ))}
        </div>
     );
}
 
export default RegisterData;