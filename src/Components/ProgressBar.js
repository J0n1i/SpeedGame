import '../App.css';

function ProgressBar(props) {
    return (
        <div className="progressbarContainer">
            <p className="progressbarText">{props.progressText.toFixed(2)}s</p>
            <div className="progressbar" style={{ width: props.progress + '%' }}></div>
        </div>
    )
}

export default ProgressBar;