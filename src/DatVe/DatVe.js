import bgmovie from "./bgmovie.jpg";
import "./style.css";
import Payinfo from "./PayTicket";
import ListRow from "./ListSeat";

export default function DatVe() {
    return (
        <div className="content">
            <div className="overplay"></div>
            <div
                className="booking-background"
                style={{
                    backgroundImage: `url(${bgmovie})`,
                    backgroundSize: "cover",
                }}
            ></div>

            <div className="container">
                <div className="row">
                    <div className="col-lg-8 col-md-12 booking-content text-center mt-3">
                        <h2 className="title-big">BOOK MOVIE TICKETS</h2>
                        <div className="title-small">SCREEN</div>
                        <table className="table chairList">
                            <ListRow/>
                        </table>
                    </div>

                    <div className="col-lg-4 col-md-12 booking-checkout mt-3 ">
                        <Payinfo />
                    </div>
                </div>
            </div>
        </div>
    );
}