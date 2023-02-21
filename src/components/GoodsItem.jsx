function GoodsItem(props) {
    const { id, name, description, price, full_background, icon, addToCard = Function.prototype } = props;

    return (
        <div className='card'>
            <div className='card-image'>
                <img src={full_background} alt={name} />
            </div>
            <div className='card-content'>
                <span className='card-title'>{name}</span>
                <p>{description}</p>
            </div>
            <div className='card-action'>
                <button
                    className='btn cyan darken-3 white-text'
                    onClick={() => addToCard({ id, name, price, icon })}
                >
                    Купить
                </button>
                <span className='right' style={{ fontSize: '1.3rem' }}>
                    {price} руб.
                </span>
            </div>
        </div>
    );
}

export { GoodsItem };
