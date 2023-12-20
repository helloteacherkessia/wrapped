function Coupon(props: { code: string }) {
    return (
        <div className="coupon-card" style={{
            margin: "2%"
        }}>
            <img src="/wrapped/logo.png" className="logo" />
            <div className="coupon-row">
                <span id="cpnCode">{props.code}</span>
            </div>
            <p style={{
                fontSize: "70%"
            }}>Desconto único de 20% de desconto na próxima mensalidade do aluno e 20% na primeira mensalidade do novo aluno ingressante. Uso único, válido até 31/01/2024. </p>
            <div className="circle1"></div>
            <div className="circle2"></div>
        </div>
    )
};

export default Coupon