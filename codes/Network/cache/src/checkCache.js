module.exports = function checkCache(stats, req, res) {
  const stasmTime = stats.mtime.toUTCString()
  res.setHeader('Last-Modified', stasmTime)
  res.setHeader('Etag', `"${stasmTime}abcd"`)
  const LastModified = req.headers['if-modified-since']
  const Etag = req.headers['if-none-match']
  if (!LastModified && !Etag) {
    return false
  } else if (LastModified && LastModified !== res.getHeader('Last-Modified')) {
    return false
  } else if (Etag && Etag !== res.getHeader('Etag')) {
    return false
  } else {
    return true
  }
}
