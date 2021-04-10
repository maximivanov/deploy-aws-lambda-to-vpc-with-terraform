# Deploy AWS Lambda to VPC with Terraform

Code for
[Deploy AWS Lambda to VPC with Terraform](https://www.maxivanov.io/deploy-aws-lambda-to-vpc-with-terraform/)

Usage:

```bash
docker run --rm -it -v $(pwd):/var/app -w /var/app --entrypoint bash amazon/aws-cli
```

```bash
aws configure
```

```bash
yum install -y yum-utils
Loaded plugins: ovl, priorities
amzn2-core                                                                                                                                                                                                                                                                                             | 3.7 kB  00:00:00
Resolving Dependencies
...
```

```bash
yum-config-manager --add-repo https://rpm.releases.hashicorp.com/AmazonLinux/hashicorp.repo
Loaded plugins: ovl, priorities
adding repo from: https://rpm.releases.hashicorp.com/AmazonLinux/hashicorp.repo
grabbing file https://rpm.releases.hashicorp.com/AmazonLinux/hashicorp.repo to /etc/yum.repos.d/hashicorp.repo
repo saved to /etc/yum.repos.d/hashicorp.repo
```

```bash
yum -y install terraform
Loaded plugins: ovl, priorities
hashicorp                                                                                                                                                                                                                                                                                              | 1.4 kB  00:00:00
hashicorp/2/x86_64/primary                                                                                                                                                                                                                                                                             |  39 kB  00:00:00
hashicorp                                                                                                                                                                                                                                                                                                             255/255
Resolving Dependencies
...
```

```bash
cd terraform

terraform init
```

```bash
terraform apply
```

Invoke Lambda:

```bash
aws lambda invoke --function-name lambda-vpc-tf-lambda-function out.txt
{
    "StatusCode": 200,
    "ExecutedVersion": "$LATEST"
}
```

```bash
cat out.txt
"If you spell Chuck Norris in Scrabble, you win. Forever."
```
