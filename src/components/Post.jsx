const dateOptions = {
  minute: '2-digit',
  hour: '2-digit',
  // weekday: 'long',
  day: 'numeric',
  month: 'long',
  year: 'numeric'
};

export default function Post(props) {
  if (!props.id) return (
    <div className="post-container">
      Post not found.
    </div>
  )

  return (
    <div className="post-container">
      <pre className="post-content">
        {props.content}
      </pre>
      <div className="post-date">
        {new Date(props.created).toLocaleDateString('ru-RU', dateOptions)}
      </div>
    </div>
  )
}
