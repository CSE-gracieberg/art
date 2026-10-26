import "./Resources.css";
import PageTitle from "../../components/pagetitle/PageTitle";
import ResourceTable from "../../components/resourcetable/ResourceTable";
import samdoes from "../../images/samdoesarts.png";
import artkids from "../../images/artkids.png";
import artsherpa from "../../images/artsherpa.png";
import superrae from "../../images/superraedizzle.png";
import smarthistory from "../../images/smarthistory.png";
import strathmore from "../../images/strathmore.png";
import prismacolor from "../../images/prismacolor.png";
import amazon from "../../images/amazon.png";
import michaels from "../../images/michaels.png";
import crayola from "../../images/crayola.png";

// this array will come from JSON file
const resources = [
  { _id: 1, img_name: samdoes, name: "SamDoesArts", category: "video", description: "Great for learning character design and portraits!", skill_level: "All levels", link: "https://www.youtube.com/@samdoesarts" },
  { _id: 2, img_name: artkids, name: "ArtForKidsHub", category: "video", description: "Simple drawings for beginners, geared towards children.", skill_level: "Beginner", link: "https://www.youtube.com/@artforkidshub" },
  { _id: 3, img_name: artsherpa, name: "The Art Sherpa", category: "video", description: "Step-by-step real-time painting tutorials", skill_level: "Beginner", link: "https://www.youtube.com/@TheArtSherpa" },
  { _id: 4, img_name: superrae, name: "SuperRaeDizzle", category: "video", description: "Learn about different ways to create realism art!", skill_level: "Intermediate", link: "https://www.youtube.com/@SuperRaedizzle" },
  { _id: 5, img_name: smarthistory, name: "Smarthistory", category: "video", description: "Learn about the history of art in an AP art history layout!", skill_level: "All levels", link: "https://www.youtube.com/@smarthistory-art-history" },
  { _id: 6, img_name: strathmore, name: "Strathmore", category: "shopping", description: "Sketchbooks", skill_level: "All levels", link: "https://www.strathmoreartist.com/" },
  { _id: 7, img_name: prismacolor, name: "PrismaColor", category: "shopping", description: "Colored pencils, markers, graphite, and more", skill_level: "All levels", link: "https://www.prismacolor.com/" },
  { _id: 8, img_name: amazon, name: "Amazon", category: "shopping", description: "Beginner level art supplies", skill_level: "Beginner", link: "https://www.amazon.com/stores/AmazonBasics/page/FE852838-DC10-408A-BEC6-3659486F2F6C" },
  { _id: 9, img_name: michaels, name: "Michaels", category: "shopping", description: "My go-to for any level of paint and painting supplies", skill_level: "All levels", link: "https://www.michaels.com/shop/art-supplies/paint-painting-supplies/fine-art-paint" },
  { _id: 10, img_name: crayola, name: "Crayola", category: "shopping", description: "Good, cheap supplies. Great for kids!", skill_level: "Beginner", link: "https://www.crayola.com/products" },
];

const Resources = () => {
  const videos = resources.filter((r) => r.category === "video");
  const shopping = resources.filter((r) => r.category === "shopping");

  return (
    <div id="resources">
      <PageTitle
        title="HELPFUL RESOURCES"
        subtitle="Hadn't found what you're looking for? Here you can find links to other tutorials, helpful materials, and websites that may have what you need!"
      />

      <ResourceTable
        title="VIDEOS"
        nameLabel="Channel"
        detailLabel="Type of Content"
        resources={videos}
      />

      <ResourceTable
        title="SHOPPING"
        nameLabel="Store"
        detailLabel="Material"
        resources={shopping}
      />
    </div>
  );
};

export default Resources;