const extractAlbumInfo = album => ({
  albumTags: album?.tags?.tag,
  albumArtistName: album?.artist,
  albumLargeCoverLink: album?.image[3]['#text'],
  albumSmallCoverLink: album?.image[1]['#text'],
  albumName: album?.name,
  albumTracks: album?.tracks?.track,
  albumSumary: album?.wiki?.summary,
  albumContent: album?.wiki?.content,
});

export default extractAlbumInfo;
