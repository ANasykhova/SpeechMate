from firebase_admin import storage

from configs.env import BUCKET_NAME

bucket = storage.bucket(name='speechmate-39a12.appspot.com')
PROJECTS_COLLECTION = "projects"
