import "./Contests.css";
import PageTitle from "../../components/pagetitle/PageTitle";
import WinnerCard from "../../components/winnercard/WinnerCard";
import InfoBox from "../../components/infobox/InfoBox";
import "./Contests.css";
import ContestStar from "../../components/conteststar/ContestStar";
import SplitBar from "../../components/splitbar/Splitbar";
import willow from "../../images/willow.png";
import pinkman from "../../images/pinkman.png";
import trainer from "../../images/trainer.png";

// Listed in the order they appear on screen (3rd, 1st, 2nd)
const winners = [
  { rank: 3, heading: "★ ★ ★ Third Place Winner ★ ★ ★", place: "THIRD PLACE", title: "Willow", image: willow },
  { rank: 1, heading: "★ First Place Winner ★", place: "FIRST PLACE", title: "Pinkman", image: pinkman },
  { rank: 2, heading: "★ ★ Second Place Winner ★ ★", place: "SECOND PLACE", title: "Trainer", image: trainer },
];

const Contests = () => {
  const byRank = [...winners].sort((a, b) => a.rank - b.rank);

  return (
    <div id="contests">
      <PageTitle
        title="CONTESTS"
        subtitle="Find New ways to challenge yourself and get inspired!"
      />

      <div id="winning-art">
        {winners.map((w) => (
          <WinnerCard key={w.rank} heading={w.heading} image={w.image} alt={w.title} />
        ))}
      </div>

      <SplitBar />

      <div id="winners">
        <InfoBox title="Last Weeks Contest:">
          <p>Redraw a character from a movie, tv show, or book in your style!</p>
        </InfoBox>
        <InfoBox title="Last Week's Winners:">
          {byRank.map((w) => (
            <p key={w.rank}>{w.place}: {w.title} by: Gracie Bergmann</p>
          ))}
        </InfoBox>
      </div>

      <div id="submit">
        <ContestStar />
        <div id="this-month-contest">
          <h2>&#9733;THIS MONTH&apos;S CONTEST:&#9733;</h2>
          <p>Create a spooky design!</p>
        </div>
      </div>

      <h2 id="due">&#9733; This month&apos;s contest submission is due OCTOBER 31st! &#9733;</h2>
    </div>
  );
};

export default Contests;