
export const GifItem = ({ title, url }) => { //Recuerda que en los corchetes significa que desestructuramos
  return (
    <div className="card">

        <img src={url} alt={title} />
        <p>{title}</p>
        
    </div>
  )
}