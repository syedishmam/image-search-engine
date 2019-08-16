import React from 'react';

class ImageCard extends React.Component {
    constructor(props) {
        super(props);
        this.state = { spans: 0 };

        this.imageRef = React.createRef();
    }

    //When each image loads call setSpans()
    componentDidMount() {
        this.imageRef.current.addEventListener('load', this.setSpans)
    }

    //Sets number of spans needed for each image based on it's height
    setSpans = () => {
        const height = this.imageRef.current.clientHeight;
        const spans = Math.ceil(height / 150 + 1);

        this.setState({ spans });
    }

    render() {
        const {description, urls} = this.props.image;

        return (
            <div style={{gridRowEnd: `span ${this.state.spans}`}} >
                <img ref={this.imageRef} alt={description} src={urls.regular} />
            </div>
        )
    }
}

export default ImageCard;