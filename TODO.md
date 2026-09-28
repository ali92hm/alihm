# TODO

## Deployment / infra

- [ ] **Switch to GitHub OIDC for AWS auth.** `release.yml` currently passes
      long-lived `AWS_ACCESS_KEY_ID` / `AWS_SECRET_ACCESS_KEY` secrets *in
      addition to* assuming a role via `role-to-assume`. Add
      `permissions: id-token: write` to the job and drop the static
      access-key/secret-key inputs so the role is assumed via OIDC only —
      removes the long-lived credentials from the repo entirely.

- [ ] **Add CDN invalidation to the deploy step.** If a CloudFront (or
      similar) distribution sits in front of the `alihm.net` S3 bucket,
      `scripts/deploy.sh` never invalidates it after `aws s3 sync`, so
      deploys can be invisible until the cache expires. If there's no CDN in
      front of the bucket, decide whether the site should have one (HTTPS at
      the apex, caching, etc.) — plain S3 static hosting doesn't give you
      TLS on a custom domain.
