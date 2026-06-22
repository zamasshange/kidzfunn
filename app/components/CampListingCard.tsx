import type { CampListing } from '../data/summerCamps';

export default function CampListingCard({ camp }: { camp: CampListing }) {
  return (
    <div className="wp-block-column is-layout-flow wp-block-column-is-layout-flow camp-listing">
      <figure className="wp-block-image size-large is-style-shape-angle">
        <img decoding="async" src={camp.image} alt={camp.title} />
      </figure>
      <h2 className="wp-block-heading">{camp.title}</h2>
      <h3 className="wp-block-heading camp-listing__ages">{camp.ages}</h3>
      <p>
        <strong>Dates:</strong> {camp.dates}
        <br />
        <strong>Time:</strong> {camp.time}
        <br />
        <strong>Price:</strong> {camp.price}
        {camp.aftercare ? (
          <>
            <br />
            <strong>Aftercare:</strong> {camp.aftercare}
          </>
        ) : null}
      </p>
      {camp.note ? (
        <p className="camp-listing__note">
          <em>{camp.note}</em>
        </p>
      ) : null}
      <p>{camp.description}</p>
      <p>
        <em>{camp.tagline}</em>
      </p>
    </div>
  );
}
