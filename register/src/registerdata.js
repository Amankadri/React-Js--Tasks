const RegisterData = ({aman,}) => {
    return ( 
        <div className="dataRegister">
            {((register)=>(
                <div className="datapreview" key={register.id}>
                    <p>{register.email}</p>
                    <div>{register.password}</div>
                    <div>{register.number}</div>
                </div>
            ))}
        </div>
     );
}
 
export default RegisterData;