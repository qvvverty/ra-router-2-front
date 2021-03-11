const dateOptions = {
  minute: '2-digit',
  hour: '2-digit',
  // weekday: 'long',
  day: 'numeric',
  month: 'long',
  year: 'numeric'
};

export default function Post(props) {
  return (
    <div className="post-container">
      <div>
        {props.content}
      </div>
      <div>
        {new Date(props.created).toLocaleDateString('ru-RU', dateOptions)}
      </div>
      {/* <div className="post-delete">✗</div> */}
    </div>
  )
}
