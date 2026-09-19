import MorphSlider from "~/components/ui/MorphSlider";

interface CarouselComponentProps {
    items?: {
        image: string;
        caption?: string;
    }[];
}

const CarouselComponent = ({ items }: CarouselComponentProps) => {
    return (
        <MorphSlider
            items={items}
            transition="shear"
            intensity={0}
            aberration={0}
            drift={0}
            autoplay
            overlayColor="#f7f6f0"
            duration={1.1}
            ease="none"
            scale={1}
            autoplayDelay={4}
            loop
            radius={0}
            showCaptions={false}
            showControls
            showIndicators={false}
        />
    );
};

export default CarouselComponent;