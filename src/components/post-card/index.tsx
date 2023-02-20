import { Card, Image, Text, Avatar, Button, Tooltip, Group, ActionIcon } from '@mantine/core'
import { IFPostList } from '../../types/index'
import { IconBookmark, IconHeart, IconMessageCircle2 } from '@tabler/icons'
import { Link, useNavigate } from 'react-router-dom'
import avatarfault from './../../assets/user.png'
import imageDfault from './../../assets/banner.png'

type MyCardProps = {
  post: IFPostList
}
function PostCard(props: MyCardProps) {
  const { title, image, id, countLike, countComment, release_date, author } = props.post
  const navigate = useNavigate()
  return (
    <Card shadow="md" style={{ maxWidth: 310, cursor: 'pointer' }} radius="md" withBorder>
      <Card.Section px="md" py="xs">
        <Tooltip label={author.display_name} color="dark" position="top-start" withArrow>
          <Avatar
            onClick={() => navigate(`/user/profile/${author.id}`)}
            size={32}
            radius="xl"
            color="blue"
            src={author.avatar || avatarfault}
            alt="Avatar"
            style={{ marginTop: 10 }}
          />
        </Tooltip>
      </Card.Section>
      <Card.Section px="md" mih={50} onClick={() => navigate(`/post/public/${id}`)}>
        <Group mb="xs">
          <Text weight={700} size="md" lineClamp={2}>
            {title}
          </Text>
        </Group>
      </Card.Section>
      <Card.Section mt="sm" px="xs" onClick={() => navigate(`/post/public/${id}`)}>
        <Image src={image || imageDfault} alt={title} height={180} radius="md" />
      </Card.Section>
      <Group grow style={{ marginTop: 10 }}>
        <ActionIcon color="pink" variant="transparent">
          <IconHeart />
          <Text weight={700} size="sm" ml={10}>
            {countLike > 0 ? countLike : null}
          </Text>
        </ActionIcon>
        <ActionIcon color="pink" variant="transparent">
          <IconMessageCircle2 />
          <Text weight={700} size="sm" ml={10}>
            {countComment > 0 ? countLike : null}
          </Text>
        </ActionIcon>
        <ActionIcon color="pink" variant="transparent">
          <IconBookmark />
        </ActionIcon>
      </Group>
    </Card>
  )
}

export default PostCard