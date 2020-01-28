const extractArtistInfo = artist => ({
  artistName: artist?.name,
  artistRelatedTags: artist?.tags?.tag,
  artistSummary: artist?.bio?.summary,
  artistNumListeners: artist?.stats?.listeners,
  artistTopAlbums: artist?.albums?.topalbums?.album,
  similarArtists: artist?.similar?.artist,
  artistUrl: artist?.url,
});

export default extractArtistInfo;
