import CardSwap, { Card } from "@/components/CardSwap";
import TextType from "@/components/TextType";
import { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import "github-markdown-css/github-markdown-dark.css";

const MarkdownFromGithub = ({ url }: { url: string }) => {
  const [content, setContent] = useState("");
  useEffect(() => {
    fetch(url)
      .then((res) => res.text())
      .then((text) => setContent(text));
  }, []);

  return (
    <div className="p-10 rounded-xl bg-[#0d1117]">
      <article
        className="markdown-body"
        style={{ minWidth: "200px", maxWidth: "980px", margin: "0 auto" }}
      >
        <ReactMarkdown remarkPlugins={[remarkGfm]}>{content}</ReactMarkdown>
      </article>
    </div>
  );
};

export const GivenTechCard = () => (
  <>
    <div className="flex-1 pl-24">
      <div className="mb-4 w-full">
        <TextType
          className="text-4xl sm:text-5xl lg:text-7xl text-white font-bold leading-tight tracking-tight"
          text={["GivenTech."]}
          typingSpeed={100}
          loop={false}
          showCursor={true}
          cursorCharacter="|"
        />
      </div>
    </div>
    <div className="flex-1">
      <CardSwap
        height={"85vh"}
        width={"50vw"}
        cardDistance={60}
        verticalDistance={120}
        delay={5000}
        skewAmount={6}
        pauseOnHover={true}
      >
        <Card>
          <h3>Card 1</h3>
          <p>Your content here</p>
        </Card>
        <Card>
          <h3>Card 2</h3>
          <p>Your content here</p>
        </Card>
        <Card>
          <h3>Card 3</h3>
          <p>Your content here</p>
        </Card>
      </CardSwap>{" "}
    </div>
  </>
);
export const SistemManajemenRestoranPOSAndQROrderingCard = () => (
  <>
    <div className="flex-1 pl-24">
      <div className="mb-4 w-full">
        <TextType
          className="text-4xl sm:text-5xl lg:text-7xl text-white font-bold leading-tight tracking-tight"
          text={["Sistem Manajemen Restoran POS & QR Ordering"]}
          typingSpeed={100}
          loop={false}
          showCursor={true}
          cursorCharacter="|"
        />
      </div>
      <p className="text-gray-400 text-base sm:text-lg lg:text-xl leading-relaxed max-w-md lg:max-w-lg mb-8">
        Sistem Manajemen Restoran modern yang dirancang untuk mempermudah
        operasional restoran, kafe, dan food court. Sistem ini mengintegrasikan
        POS, QR Ordering per sesi, Manajemen Meja, dan Kitchen Order Ticket
        dalam satu platform real-time.
      </p>
    </div>
    <div className="flex-1">
      <CardSwap
        height={"85vh"}
        width={"50vw"}
        cardDistance={60}
        verticalDistance={120}
        delay={5000}
        skewAmount={6}
        pauseOnHover={true}
      >
        <Card>
          <h3>Card 2</h3>
          <p>Your content here</p>
        </Card>
        <Card customClass="overflow-y-auto">
          <MarkdownFromGithub url="https://raw.githubusercontent.com/Areandra/Sistem-Manjemen-Restorant-POS-QR-Ordering/main/README.md" />
        </Card>
        <Card>
          <h3>Card 3</h3>
          <p>Your content here</p>
        </Card>
      </CardSwap>
    </div>
  </>
);
