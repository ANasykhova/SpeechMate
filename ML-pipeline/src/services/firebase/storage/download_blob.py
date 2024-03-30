import os

from configs.firebase import bucket
from configs.logger import catch_error, print_info_log
from constants.files import PROCESSING_FILES_DIR_PATH
from constants.log_tags import LogTag
import requests


def download_blob(
    source_blob_path: str,
    destination_file_path: str,
    project_id: str,
    show_logs: bool = False
):
    try:
        if show_logs:
            print_info_log(
                tag=LogTag.DOWNLOAD_BLOB,
                message=f"File path in bucket: {source_blob_path}"
            )

        # Get parent dir of this file
        project_dir = os.path.dirname(destination_file_path)

        # Check if file saved to right directory
        if project_dir == PROCESSING_FILES_DIR_PATH:
            print_info_log(
                tag=LogTag.DOWNLOAD_BLOB,
                message=f"File parent dir is not tmp"
            )

        # Check file path
        if not os.path.exists(project_dir):
            print_info_log(
                tag=LogTag.DOWNLOAD_BLOB,
                message=f"File parent dir is not exists"
            )
            print_info_log(
                tag=LogTag.DOWNLOAD_BLOB,
                message=f"Creating tmp dir for project files..."
            )
            # Create dir for project file if not exists
            os.mkdir(project_dir)
            print_info_log(
                tag=LogTag.DOWNLOAD_BLOB,
                message=f"Dir created on path {project_dir}"
            )

        blob = bucket.blob(source_blob_path)
        #download_url = 'http://localhost:9199/v0/b/audioland-dub-dev/o/{source_blob_path}?alt=media'

        # # Делаем GET запрос для скачивания файла
        # response = requests.get(download_url)

        # # Убедитесь, что запрос был успешным
        # if response.status_code == 200:
        #     # Записываем содержимое в файл
        #     with open(destination_file_path, 'wb') as file:
        #         file.write(response.content)
        #     print("Файл успешно скачан")
        # else:
        #     print("Ошибка при скачивании файла:", response.status_code)

        blob.download_to_filename(destination_file_path)

        if show_logs:
            print_info_log(
                tag=LogTag.DOWNLOAD_BLOB,
                message=f"File saved to {destination_file_path}"
            )

    except Exception as e:
        catch_error(
            tag=LogTag.DOWNLOAD_BLOB,
            error=e,
            project_id=project_id
        )
