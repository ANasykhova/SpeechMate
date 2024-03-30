from datetime import datetime

import requests

from constants.log_tags import LogTag
from configs.env import UPDATE_USER_TOKENS_URL
from configs.logger import catch_error, print_info_log
from services.firebase.init_firebase import get_firestore


def update_user_tokens(
    organization_id: str,
    tokens_in_seconds: int,
    project_id: str,
    show_logs: bool = False
):
    try:
        log_tag = LogTag.UPDATE_PROJECT

        request_fields = {
            "organization_id": organization_id,
            "tokens": tokens_in_seconds
        }

        if show_logs:
            print_info_log(
                tag=LogTag.UPDATE_PROJECT,
                message=f"Request fields: {request_fields}"
            )
            
        ORGANIZATIONS_COLLECTION = 'organizations'
        firestore = get_firestore()
        user_ref = firestore.collection(ORGANIZATIONS_COLLECTION).document(organization_id)
        user_snap = user_ref.get()
        if not user_snap.exists:
            catch_error(
                tag = log_tag,
                error = Exception(f'Organization with ID {organization_id} does not exist.')
            )
        user_ref.update( {
            "id":organization_id,
            "usedTokensInSeconds":tokens_in_seconds
        })

        request_time = datetime.now()
        # response = requests.post(
        #     UPDATE_USER_TOKENS_URL,
        #     request_fields,
        # )
        response_time = datetime.now()
        time_difference = response_time - request_time

        if show_logs:
            print_info_log(
                tag=LogTag.UPDATE_USER_TOKENS,
                message=f"Response time is {time_difference}"
            )

        # if not response.ok:
        #     catch_error(
        #         tag=LogTag.UPDATE_USER_TOKENS,
        #         error=Exception(f"Firebase Cloud Function Error ({response.status_code}): {response.text}"),
        #         project_id=project_id
        #     )

    except Exception as e:
        catch_error(
            tag=LogTag.UPDATE_USER_TOKENS,
            error=e,
            project_id=project_id
        )


if __name__ == "__main__":
    organization_id = "ZH7s6QjGGkCFukmNo2SA"
    tokens_in_seconds = 182
    project_id = "3wxihJKadxCzEr8lvqzN"

    update_user_tokens(
        organization_id=organization_id,
        tokens_in_seconds=tokens_in_seconds,
        project_id=project_id,
        show_logs=True
    )
