aws s3 rm s3://happybirthdayyouoldassboi.arjungandhi.com/ --recursive
aws s3 sync ./ s3://happybirthdayyouoldassboi.arjungandhi.com
 aws cloudfront create-invalidation \
    --distribution-id E607NKFFNXFSW\
    --paths "/*"
