import { ImageList, ImageListItem } from '@mui/material';

export const ImageGallery = ({ images }) => {
    return (
        <ImageList sx={{ width: '100%', height: 800 }} cols={5} rowHeight={200}>
            {images.map((images) => (
                <ImageListItem key={images}>
                    <img
                        src={`${images}?w=164&h=164&fit=crop&auto=format`}
                        srcSet={`${images}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                        alt={images.title}
                        loading='lazy'
                    />
                </ImageListItem>
            ))}
        </ImageList>
    );
};
