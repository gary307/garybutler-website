import React, { PureComponent } from 'react';
import './Work.css';
import { Link } from 'react-router-dom';

class Work extends PureComponent {
    componentWillMount() {
        // console.log(this.props.workSelection['bt']);
    }

    render() {
        const { workSelection, match } = this.props;

        console.log(workSelection[match.params.id]);

        return (
            <div className="work">
                <Link to="/">
                    <div className="gb-closeWork">
                        <h4>Back to Home</h4>
                    </div>
                </Link>

                {workSelection[match.params.id] ? (
                    <div className="work__row">
                        <div className="work__copy">
                            <h2>{workSelection[match.params.id].title}</h2>
                            <p>
                                {workSelection[this.props.match.params.id].copy}
                            </p>
                            <p>
                                {
                                    workSelection[this.props.match.params.id]
                                        .skills
                                }
                            </p>
                        </div>
                        <div className="work__image">
                            {workSelection[
                                this.props.match.params.id
                            ].images.map(image => (
                                <img src={image.fields.file.url} />
                            ))}
                        </div>
                    </div>
                ) : (
                    ''
                )}
            </div>
        );
    }
}

export default Work;
